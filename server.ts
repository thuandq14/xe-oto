import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;
const isProd = process.env.NODE_ENV === "production";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Route for Gemini Car Consultant
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: "user", parts: [{ text: `Bạn là trợ lý ảo cao cấp của AutoElite - showroom ô tô hạng sang. 
          Hãy tư vấn cho khách hàng một cách lịch sự, chuyên nghiệp bằng tiếng Việt.
          Chúng tôi có các dòng xe: 
          1. Porsche 911 GT3 (Giá: 12 tỷ VNĐ, Thể thao)
          2. Mercedes-Benz S-Class (Giá: 6 tỷ VNĐ, Sang trọng)
          3. Tesla Model S (Giá: 4 tỷ VNĐ, Xe điện công nghệ)
          4. Range Rover Autobiography (Giá: 10 tỷ VNĐ, SUV địa hình)
          5. Audi e-tron (Giá: 3 tỷ VNĐ, SUV điện)
          
          Nhiệm vụ: Tư vấn dòng xe phù hợp dựa trên ngân sách và nhu cầu. Luôn giữ thái độ thân thiện và sang trọng.` }]},
          ...history,
          { role: "user", parts: [{ text: message }]}
        ],
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to fetch response from AI" });
    }
  });

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
