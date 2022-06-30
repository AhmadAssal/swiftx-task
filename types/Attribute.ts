import { Item } from "./Item";

export interface Attribute {
  name: string;
  type: string;
  items: Item[];
}
