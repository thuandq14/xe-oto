import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarCard from "./components/CarCard";
import CarFilter from "./components/CarFilter";
import AIConsultant from "./components/AIConsultant";
import Footer from "./components/Footer";
import { CARS } from "./data";
import { FilterOptions } from "./types";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";

export default function App() {
  const [filters, setFilters] = useState<FilterOptions>({
    brand: "Tất cả",
    category: "Tất cả",
    minPrice: 0,
    maxPrice: 15000000000,
  });

  const filteredCars = useMemo(() => {
    return CARS.filter(car => {
      const matchBrand = filters.brand === "Tất cả" || car.brand === filters.brand;
      const matchCategory = filters.category === "Tất cả" || car.category === filters.category;
      const matchPrice = car.price <= filters.maxPrice;
      return matchBrand && matchCategory && matchPrice;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      <main>
        <Hero />
        
        <CarFilter filters={filters} setFilters={setFilters} />

        {/* Collections Section */}
        <section className="py-40 container mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-white/10 pb-12">
            <div className="space-y-4">
              <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px]">Premium Inventory</span>
              <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter">Bộ Sưu Tập <br /><span className="stroke-text">Đặc Tuyển</span></h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed font-medium uppercase tracking-widest italic">
              Những chiếc xe được tuyển chọn kỹ lưỡng, đảm bảo tiêu chuẩn khắt khe nhất về chất lượng và hiệu năng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            <AnimatePresence mode="popLayout">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </AnimatePresence>
          </div>

          {filteredCars.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="py-40 text-center text-white/20 uppercase tracking-[0.3em] font-black"
            >
              Không tìm thấy kết quả phù hợp.
            </motion.div>
          )}

          <div className="mt-40 text-center">
            <button className="btn-outline-editorial group">
              Xem tất cả sản phẩm <ArrowRight className="w-4 h-4 inline-block ml-2 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-40 border-t border-white/10">
          <div className="container mx-auto px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="relative">
                <div className="absolute -inset-10 bg-brand/10 blur-[120px] opacity-20" />
                <div className="relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=1600" 
                    alt="Quality Service"
                    className="relative z-10 w-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute bottom-0 left-0 bg-brand p-8 z-20">
                    <span className="text-black font-black text-4xl italic tracking-tighter">SINCE 1994</span>
                  </div>
                </div>
              </div>

              <div className="space-y-16">
                <div className="space-y-6">
                  <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px]">Tầm Nhìn & Sứ Mệnh</span>
                  <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">Trải nghiệm <br /><span className="stroke-text">Độc Quyền</span></h2>
                </div>

                <div className="grid grid-cols-1 gap-12">
                  {[
                    { Icon: Star, title: "Chất lượng tuyệt đối", desc: "Mỗi chiếc xe đều trải qua quy trình kiểm soát 200 điểm kỹ thuật khắt khe." },
                    { Icon: ShieldCheck, title: "Bảo hành dài hạn", desc: "Chương trình bảo hành vàng lên đến 5 năm hoặc 100.000km cho tất cả dòng xe." },
                    { Icon: Clock, title: "Phục vụ 24/7", desc: "Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn bất cứ lúc nào, bất cứ nơi đâu." }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex gap-8 group"
                    >
                      <div className="w-16 h-16 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand transition-colors">
                        <item.Icon className="text-brand w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold uppercase tracking-widest italic">{item.title}</h4>
                        <p className="text-white/40 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIConsultant />
    </div>
  );
}
