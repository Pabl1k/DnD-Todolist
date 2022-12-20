import { FC, useEffect, useState } from "react";
import { useManagement } from "../../api/calls/management";
import { CollectionType } from "../../api/destination";
import "./TaskMenu.scss";

interface Props {
  collection: CollectionType;
  taskId: string;
  currentPriority?: boolean;
  closeMenu: () => void;
  onEditMode: () => void;
}

const TaskMenu: FC<Props> = ({ collection, taskId, currentPriority, closeMenu, onEditMode }) => {
  const { updateTask, deleteTask } = useManagement();

  const [deleteCheck, setDeleteCheck] = useState({
    first: false,
    final: false,
  });

  const priorityHandler = async () => {
    closeMenu();
    await updateTask(collection, taskId, { priority: !currentPriority });
  };

  const deleteHandler = () => {
    setDeleteCheck({ ...deleteCheck, first: true });
  };

  const priorityTitle = currentPriority ? "Remove priority" : "Mark as priority";

  const menu = [
    { id: "priority", title: priorityTitle, onClick: priorityHandler },
    { id: "edit", title: "Edit", onClick: onEditMode },
    { id: "delete", title: "Delete task", onClick: deleteHandler },
  ];

  const renderDeleteCheck = () => (
    <div className="delete-check">
      <span>Please confirm deletion</span>
      <div className="delete-check__buttons-container">
        <button className="delete-check__button" onClick={() => setDeleteCheck({ ...deleteCheck, final: true })}>
          Confirm
        </button>
        <button className="delete-check__button" onClick={() => setDeleteCheck({ ...deleteCheck, first: false })}>
          Cancel
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    if (deleteCheck.final) {
      closeMenu();
      deleteTask(collection, taskId);
    }
  }, [deleteCheck.final]);

  return (
    <div className="task-menu">
      {deleteCheck.first
        ? renderDeleteCheck()
        : menu.map((m) => (
            <button key={m.id} className="task-menu__single" onClick={m.onClick}>
              <span>{m.title}</span>
            </button>
          ))}
    </div>
  );
};

export default TaskMenu;
