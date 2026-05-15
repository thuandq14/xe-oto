import { motion } from "motion/react";
import { ChevronRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-dark">
      {/* Editorial Decorative Elements */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 items-center opacity-30 z-20">
        <div className="w-[1px] h-24 bg-white"></div>
        <span className="writing-vertical-lr text-[10px] uppercase tracking-[0.4em] font-bold">Scroll For More</span>
      </div>

      <div className="container mx-auto px-12 relative z-10 flex">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-brand inline-block"></span>
              <span className="text-brand text-[10px] uppercase tracking-[0.4em] font-bold">
                Kỷ Nguyên Xe Điện Hạng Sang
              </span>
            </div>
            
            <h1 className="text-[80px] md:text-[120px] leading-[0.8] font-black tracking-tighter mb-8 uppercase">
              V-SERIES<br />
              <span className="stroke-text">VISION GT</span>
            </h1>

            <p className="text-white/50 text-lg max-w-md leading-relaxed mb-12 font-light">
              Kiệt tác của sự tinh tế và sức mạnh vượt trội. Khám phá kỷ nguyên mới của sự sang trọng với công nghệ dẫn đầu thế giới.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-editorial">
                Đăng ký lái thử
              </button>
              <button className="btn-outline-editorial">
                Tùy chỉnh cấu hình
              </button>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 -translate-y-1/2 left-[-10%] w-[130%]"
          >
            <div className="relative">
              <div className="absolute -top-20 -left-10 text-[240px] font-black text-white/[0.03] select-none tracking-tighter">2024</div>
              <img 
                src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1200" 
                alt="Main Car"
                className="w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.8)] grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-full aspect-square bg-brand rounded-full filter blur-[150px] opacity-10 -z-10" />
        </div>
      </div>
    </section>
  );
}
