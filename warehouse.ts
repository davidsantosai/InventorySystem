import { Product } from "./product";

export type Warehouse = {
  name: string;
  location: string;
  products: Array<Product>;

};