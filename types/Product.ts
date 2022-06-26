import { Price } from "./Price";

export interface Item {
  displayValue: string;
  value: string;
}
export interface Attribute {
  name: string;
  type: string;
  items: Item[];
}
export interface Product {
  name: string;
  gallery: string[];
  inStock: boolean;
  prices: Price[];
  description: string;
  category: string;
  brand: string;
  attributes: Attribute[];
}
