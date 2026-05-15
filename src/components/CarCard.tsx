import { motion } from "motion/react";
import { Car } from "../types";
import { Gauge, Zap, Calendar, Heart } from "lucide-react";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(car.price);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group"
    >
      <div className="relative aspect-[16/10] overflow-hidden mb-6">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 bg-brand text-black px-4 py-2 text-[8px] font-black uppercase tracking-[0.3em]">
          {car.category}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-brand text-[8px] font-black uppercase tracking-[0.3em] block mb-1">
              {car.brand}
            </span>
            <h3 className="text-3xl font-display font-black tracking-tighter uppercase">{car.name}</h3>
          </div>
        </div>

        <p className="text-white/40 text-xs font-bold tracking-widest uppercase italic">
          Niêm yết từ <span className="text-white not-italic">{formattedPrice}</span>
        </p>

        <div className="grid grid-cols-3 gap-8 py-6 border-y border-white/10">
          <div className="flex flex-col">
            <span className="text-[8px] text-brand font-black uppercase tracking-[0.2em] mb-1">Power</span>
            <span className="text-lg font-display font-bold italic">{car.specs.power.split(' ')[0]}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] text-brand font-black uppercase tracking-[0.2em] mb-1">Accel</span>
            <span className="text-lg font-display font-bold italic">{car.specs.acceleration.split('s')[0]}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] text-brand font-black uppercase tracking-[0.2em] mb-1">Year</span>
            <span className="text-lg font-display font-bold italic">{car.year}</span>
          </div>
        </div>

        <button className="w-full py-4 border border-white/10 group-hover:border-brand group-hover:bg-brand group-hover:text-black transition-all duration-500 text-[10px] uppercase tracking-[0.4em] font-black">
          Khám phá Chi tiết
        </button>
      </div>
    </motion.div>
  );
}
