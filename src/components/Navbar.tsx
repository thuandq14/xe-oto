import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Phone, Mail, Instagram, Facebook, LayoutGrid, List, Cpu, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6",
      isScrolled ? "bg-dark/80 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-black italic font-black text-lg">
            V
          </div>
          <span className="text-xl font-display font-black tracking-tighter uppercase italic">
            ELOCE <span className="text-brand">AUTO</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-12">
          {["Bộ sưu tập", "Công nghệ", "Trả góp", "Lái thử", "Liên hệ"].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              href="#"
              className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 hover:opacity-100 hover:text-brand transition-all pb-1 border-b border-transparent hover:border-brand"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold hidden sm:block">Tìm kiếm</span>
          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
            <Search className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
