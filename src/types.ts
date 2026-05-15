export interface Car {
  id: string;
  name: string;
  brand: string;
  category: "Sedan" | "SUV" | "Sports" | "Electric";
  price: number;
  year: number;
  image: string;
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    transmission: string;
  };
  features: string[];
}

export type FilterOptions = {
  brand: string;
  category: string;
  minPrice: number;
  maxPrice: number;
};
