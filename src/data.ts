import { Car } from "./types";

export const CARS: Car[] = [
  {
    id: "1",
    name: "911 GT3",
    brand: "Porsche",
    category: "Sports",
    price: 12100000000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1600",
    specs: {
      engine: "4.0L Flat-6",
      power: "502 hp",
      acceleration: "3.2s",
      transmission: "7-speed PDK"
    },
    features: ["Aero Kit", "Track Mode", "Lightweight Carbon Fiber"]
  },
  {
    id: "2",
    name: "S-Class",
    brand: "Mercedes-Benz",
    category: "Sedan",
    price: 6100000000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1600",
    specs: {
      engine: "3.0L Inline-6 Turbo",
      power: "429 hp",
      acceleration: "4.8s",
      transmission: "9G-TRONIC"
    },
    features: ["Burmester 4D", "Massage Seats", "MBUX Hyperscreen"]
  },
  {
    id: "3",
    name: "Model S Plaid",
    brand: "Tesla",
    category: "Electric",
    price: 4200000000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1600",
    specs: {
      engine: "Tri-Motor AWD",
      power: "1,020 hp",
      acceleration: "1.99s",
      transmission: "Single speed"
    },
    features: ["Autopilot", "Panoramic Roof", "Ludicrous Mode"]
  },
  {
    id: "4",
    name: "Range Rover Autobiography",
    brand: "Land Rover",
    category: "SUV",
    price: 10200000000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1606611013481-2244299dc4c3?auto=format&fit=crop&q=80&w=1600",
    specs: {
      engine: "4.4L V8 Twin Turbo",
      power: "523 hp",
      acceleration: "4.4s",
      transmission: "8-speed Auto"
    },
    features: ["All-Wheel Steering", "Executive Class Seats", "Terrain Response 2"]
  },
  {
    id: "5",
    name: "e-tron GT",
    brand: "Audi",
    category: "Electric",
    price: 3500000000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1600",
    specs: {
      engine: "Dual-Motor Electric",
      power: "469 hp",
      acceleration: "3.9s",
      transmission: "2-speed Automatic"
    },
    features: ["Quattro AWD", "Matrix LED Headlights", "Bang & Olufsen Sound"]
  }
];
