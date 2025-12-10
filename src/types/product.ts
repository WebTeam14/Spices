export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  weight: string;
  origin: string;
  inStock: boolean;
  isNew?: boolean;
}
