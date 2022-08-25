import { ItemType } from "./item";

export interface BoardType {
  id: string;
  title: string;
  items: ItemType[];
}
