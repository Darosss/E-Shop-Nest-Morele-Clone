export interface Product {
  id: number;
  name: string;
  price: number;
  link: string;
  sold: number;
}

export interface Property {
  id: number;
  name: string;
  category: PropertyCategory;
  productProperties?: ProductProperty;
}

export interface ProductProperty {
  id: number;
  value: string;
  property: Pick<Property, "id" | "name" | "category">;
}

export interface PropertyCategory {
  id: number;
  name: string;
}
