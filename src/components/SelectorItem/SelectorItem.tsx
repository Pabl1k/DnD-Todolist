import { FC } from "react";
import "./SelectorItem.scss";

interface Props {
  title: string;
}

const SelectorItem: FC<Props> = ({ title }) => {
  return <button className="selector-item">{title}</button>;
};

export default SelectorItem;
