import { createRef, FC, useEffect, useState } from "react";
import { ITaskMenuData, TaskType } from "../../types/item";
import { CollectionType } from "../../api/destination";
import Icon from "../Icon/Icon";
import TaskMenu from "../TaskMenu/TaskMenu";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import "./Item.scss";

interface Props {
  data: TaskType;
  collection: CollectionType;
  onDragStart: () => void;
  onDragOver?: () => void;
}

const Item: FC<Props> = ({ data, collection, onDragStart, onDragOver }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [taskMenuData, setTaskMenuData] = useState<ITaskMenuData | null>(null);
  const [editMode, setEditMode] = useState(false);

  const modalRef = createRef<HTMLDivElement>();
  useOutsideClick(modalRef, () => setMenuOpen(false));

  const { title, description, priority } = data;

  const dotsClickHandler = () => {
    setMenuOpen(!menuOpen);

    setTaskMenuData({
      ...taskMenuData,
      collection,
      taskId: data.id,
      priority: data.priority,
    });
  };

  useEffect(() => {
    if (!menuOpen) {
      setTaskMenuData(null);
    }
  }, [menuOpen]);

  return (
    <div
      className="item"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      {editMode ? (
        <div>edit mode</div>
      ) : (
        <div className="item__container">
          <div className="item__top-container">
            <div>
              {priority && (
                <Icon name="priority" className="item__priority-icon" />
              )}
              <span className="item__title">{title}</span>
            </div>
          </div>
          <div className="item__description">{description}</div>
        </div>
      )}
      <div className="item__dots-container" ref={modalRef}>
        <button className="item__dots" onClick={dotsClickHandler}>
          <Icon name="menu-dots" />
        </button>
        {menuOpen && taskMenuData && (
          <TaskMenu
            collection={taskMenuData.collection}
            taskId={taskMenuData.taskId}
            currentPriority={taskMenuData.priority}
            closeMenu={() => setMenuOpen(false)}
            onEditMode={() => setEditMode(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Item;
