import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, Bot, User, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function AIConsultant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Chào mừng bạn đến với AutoElite! Tôi có thể giúp gì cho bạn trong việc lựa chọn chiếc xe mơ ước?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: input,
          history: messages.map(m => ({
            role: m.role === "model" ? "model" : "user",
            parts: [{ text: m.text }]
          }))
        }),
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, { role: "model", text: data.text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: "model", text: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-brand text-dark rounded-full shadow-2xl flex items-center justify-center z-50 cursor-pointer"
      >
        <MessageSquare className="w-8 h-8" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-28 right-8 w-[400px] max-w-[calc(100vw-64px)] h-[600px] glass-dark rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-brand/20"
          >
            {/* Header */}
            <div className="bg-brand py-4 px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h3 className="font-display font-bold text-dark uppercase tracking-wider">AI Consultant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-dark hover:rotate-90 transition-transform">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-brand/20">
              {messages.map((m, i) => (
                <div key={i} className={cn(
                  "flex flex-col max-w-[85%]",
                  m.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                )}>
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed",
                    m.role === "user" 
                      ? "bg-brand text-dark rounded-tr-none font-medium" 
                      : "bg-white/5 text-gray-300 rounded-tl-none border border-white/10"
                  )}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-brand text-xs">
                  <Loader2 className="w-4 h-4 animate-spin" /> AutoElite đang suy nghĩ...
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Nhập nhu cầu của bạn..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-brand transition-colors text-sm"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1.5 p-2 text-brand hover:text-white transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
