import { Product } from ".";

export interface Category {
  id: number;
  name: string;
  description: string;
  parentId?: number;
  subcategories: Category[];
  images: string[];
  products?: Product[];
}
