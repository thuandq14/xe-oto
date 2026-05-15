import { motion } from "motion/react";
import { FilterOptions } from "../types";
import { Search, ChevronDown } from "lucide-react";

interface CarFilterProps {
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
}

const BRANDS = ["Tất cả", "Porsche", "Mercedes-Benz", "Tesla", "Land Rover", "Audi"];
const CATEGORIES = ["Tất cả", "Sedan", "SUV", "Sports", "Electric"];

export default function CarFilter({ filters, setFilters }: CarFilterProps) {
  return (
    <div className="container mx-auto px-12 -mt-16 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-surface p-10 border border-white/10 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.3em] text-brand font-black">Hãng Xe</label>
            <div className="relative group border-b border-white/20 pb-2">
              <select 
                value={filters.brand}
                onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                className="w-full bg-transparent py-2 focus:outline-none focus:border-brand transition-colors appearance-none cursor-pointer text-sm font-bold uppercase tracking-widest"
              >
                {BRANDS.map(b => <option key={b} value={b} className="bg-dark">{b}</option>)}
              </select>
              <ChevronDown className="absolute right-0 top-3 w-4 h-4 text-white/30 pointer-events-none group-hover:text-brand transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.3em] text-brand font-black">Dòng Xe</label>
            <div className="relative group border-b border-white/20 pb-2">
              <select 
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full bg-transparent py-2 focus:outline-none focus:border-brand transition-colors appearance-none cursor-pointer text-sm font-bold uppercase tracking-widest"
              >
                {CATEGORIES.map(c => <option key={c} value={c} className="bg-dark">{c}</option>)}
              </select>
              <ChevronDown className="absolute right-0 top-3 w-4 h-4 text-white/30 pointer-events-none group-hover:text-brand transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.3em] text-brand font-black">Ngân sách (Tỷ VNĐ)</label>
            <input 
              type="range"
              min="0"
              max="15"
              step="1"
              value={filters.maxPrice / 1000000000}
              onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) * 1000000000 })}
              className="w-full accent-brand h-[1px] bg-white/20 rounded-none appearance-none cursor-pointer mt-6"
            />
            <div className="flex justify-between text-[10px] text-white/40 font-black mt-2">
              <span>0 TỶ</span>
              <span className="text-brand lowercase font-bold tracking-normal italic">dưới {filters.maxPrice / 1000000000} tỷ VNĐ</span>
            </div>
          </div>

          <div className="flex items-end">
            <button className="w-full btn-editorial flex items-center justify-center gap-3">
              <Search className="w-4 h-4" /> Lọc kết quả
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
