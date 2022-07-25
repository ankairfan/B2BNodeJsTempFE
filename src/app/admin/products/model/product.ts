import { Category } from "../../categories/model/category";
import { Unit } from "../../units/model/unit";

export class Product {
  _id: string;
  code: string;
  name: string;
  price: number;
  enteringProduct: number;
  taxRate: number;
  description: string;
  picture: string;
  categoryBy: Category;
  unitBy: Unit;
  created: Date;
}
