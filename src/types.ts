export interface Product {
  id: string;
  name: string;
  price: number; // in ETB
  category: string;
  image: string;
  rating: number;
  isFeatured: boolean;
  isPromo: boolean;
  promoPrice?: number;
  description: string;
  unit: string; // e.g., "1 kg", "500g", "1 Liter", "1 Pack"
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string; // lucide icon name or description
}
