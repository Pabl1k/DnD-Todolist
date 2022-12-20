import { FC, ReactNode, useState } from "react";
import CreateNewItemButton from "../../components/CreateNewItemButton/CreateNewItemButton";
import NewTask from "../../components/NewTask/NewTask";
import "./Board.scss";

interface Props {
  title: string;
  toDoCard?: boolean;
  children?: ReactNode;
  onDragEnter: () => void;
  onDragEnd: () => void;
}

const Board: FC<Props> = ({ title, toDoCard, children, onDragEnter, onDragEnd }) => {
  const [addNewTask, setAddNewTask] = useState(false);

  return (
    <div className="card">
      <div className="card__row">
        <span className="card__title">{title}</span>
        {toDoCard && <CreateNewItemButton title="Add new task" onClick={() => setAddNewTask(true)} />}
      </div>
      <div className="card__main" onDragEnter={onDragEnter} onDragEnd={onDragEnd}>
        {toDoCard && addNewTask && <NewTask key="newTask" onNewTaskClose={() => setAddNewTask(false)} />}
        {children}
      </div>
    </div>
  );
};

export default Board;
