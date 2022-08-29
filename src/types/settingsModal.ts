import {ReactNode} from "react";

interface Content {
  id: number;
  children: ReactNode;
}

export interface IMenu {
  id: number;
  title: string;
  content: Content[];
  onClick?: () => void;
}
