import { FC, DragEvent, createRef, useEffect, useState } from "react";
import { CollectionType } from "../../api/destination";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { ITaskMenuData, TaskType } from "../../types/item";
import EditItem from "../EditItem/EditItem";
import Icon from "../Icon/Icon";
import TaskMenu from "../TaskMenu/TaskMenu";
import "./Item.scss";

interface Props {
  data: TaskType;
  collection: CollectionType;
  onDragStart: () => void;
}

const applyOpacity = (e: DragEvent<HTMLDivElement>, start = true) => {
  return (e.currentTarget.style.opacity = start ? "0.3" : "1");
};

const Item: FC<Props> = ({ data, collection, onDragStart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [taskMenuData, setTaskMenuData] = useState<ITaskMenuData | null>(null);
  const [editMode, setEditMode] = useState(false);

  const modalRef = createRef<HTMLDivElement>();
  useOutsideClick(modalRef, () => setMenuOpen(false));

  const { title, description, priority } = data;

  const menuClickHandler = () => {
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
      onDragCapture={(e) => applyOpacity(e)}
      onDragEndCapture={(e) => applyOpacity(e, false)}
    >
      {editMode ? (
        <EditItem
          itemId={data.id}
          title={title}
          description={description}
          collection={collection}
          onClose={() => {
            setEditMode(false);
            setMenuOpen(false);
          }}
        />
      ) : (
        <div className="item__container">
          <div className="item__top-container">
            <div>
              {priority && <Icon name="priority" className="item__priority-icon" />}
              <span className="item__title">{title}</span>
            </div>
          </div>
          <div className="item__description">{description}</div>
        </div>
      )}

      {!editMode && (
        <div className="item__dots-container" ref={modalRef}>
          <button className="item__dots" onClick={menuClickHandler}>
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
      )}
    </div>
  );
};

export default Item;
