import { FC, ReactNode } from "react";
import CreateNewItemButton from "../CreateNewItemButton/CreateNewItemButton";
import "./Board.scss";

interface Props {
  title: string;
  toDoCard?: boolean;
  children?: ReactNode;
  onDragEng: () => void;
  onDragEnter: () => void;
  onCreateTask: () => void;
}

const Board: FC<Props> = ({
  title,
  toDoCard,
  children,
  onDragEng,
  onDragEnter,
  onCreateTask,
}) => {
  return (
    <div className="card">
      <div className="card__row">
        <span className="card__title">{title}</span>
        {toDoCard && (
          <CreateNewItemButton title="Add new task" onClick={onCreateTask} />
        )}
      </div>
      <div
        className="card__main"
        onDragEnd={onDragEng}
        onDragEnter={onDragEnter}
      >
        {children}
      </div>
    </div>
  );
};

export default Board;
