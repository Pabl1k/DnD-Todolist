import { TaskType } from "./item";

export interface BoardType {
  id: string;
  title: string;
  items: TaskType[];
}
