import { Price } from "./Price";
export interface Product {
  name: string;
  gallery: string[];
  inStock: boolean;
  prices: Price[];
}
