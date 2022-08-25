import { FC, ReactNode } from "react";
import "./Board.scss";
import CreateNewItemButton from "../CreateNewItemButton/CreateNewItemButton";

interface Props {
  title: string;
  toDoCard?: boolean;
  children?: ReactNode;
  onDragEng: () => void;
  onDragOver: () => void;
}

const Board: FC<Props> = ({
  title,
  toDoCard,
  children,
  onDragEng,
  onDragOver,
}) => {
  return (
    <div className="card">
      <div className="card__row">
        <span className="card__title">{title}</span>
        {toDoCard && <CreateNewItemButton title="Add new task" />}
      </div>
      <div className="card__main" onDragEnd={onDragEng} onDragOver={onDragOver}>
        {children}
      </div>
    </div>
  );
};

export default Board;
