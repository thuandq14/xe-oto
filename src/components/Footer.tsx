import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 uppercase tracking-widest">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="border-r border-white/10 flex flex-col justify-center p-12 space-y-2">
          <span className="text-brand text-[10px] font-black">Tăng tốc 0-100 km/h</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black italic">10</span>
            <span className="text-[10px] opacity-40">Giây</span>
          </div>
        </div>
        
        <div className="border-r border-white/10 flex flex-col justify-center p-12 space-y-2">
          <span className="text-brand text-[10px] font-black">Quãng đường tối ưu</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black italic">680</span>
            <span className="text-[10px] opacity-40">Km</span>
          </div>
        </div>

        <div className="border-r border-white/10 flex flex-col justify-center p-12 space-y-2">
          <span className="text-brand text-[10px] font-black">Giá niêm yết từ</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black italic">4.2</span>
            <span className="text-[10px] opacity-40">Tỷ VNĐ</span>
          </div>
        </div>

        <div className="flex flex-col justify-center p-12 space-y-2 group cursor-pointer hover:bg-brand/5 transition-colors">
          <span className="text-brand text-[10px] font-black">Hỗ trợ tài chính</span>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold leading-tight">Trả góp chỉ từ <br /><span className="text-white text-lg">18tr/tháng</span></span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand group-hover:text-black group-hover:border-brand transition-all">
              <Zap className="w-4 h-4 fill-current" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 p-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-black/40">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center text-black italic font-black text-xs">V</div>
          <span className="text-sm font-display font-black tracking-tighter italic">VELOCE <span className="text-brand">AUTO</span></span>
        </div>
        
        <div className="flex gap-12 text-[8px] font-black opacity-40">
          <a href="#" className="hover:opacity-100 hover:text-brand transition-all">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 hover:text-brand transition-all">Terms of Service</a>
          <a href="#" className="hover:opacity-100 hover:text-brand transition-all">Cookie Settings</a>
          <a href="#" className="hover:opacity-100 hover:text-brand transition-all">© 2024 Veloce Group</a>
        </div>

        <div className="flex gap-6">
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="opacity-40 hover:opacity-100 hover:text-brand transition-all">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
