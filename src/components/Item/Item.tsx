import { FC, useState } from "react";
import icon from "../../assets/icons/priority.svg";
import { ItemType } from "../../types/item";
import { Dots } from "../../common/DotsTag";
import "./Item.scss";

interface Props {
  data: ItemType;
  onDragStart: () => void;
  onDragOver: () => void;
  onAddNewTask: () => void;
  onTaskSet: (task: ItemType) => void;
}

const Item: FC<Props> = ({
  data,
  onDragStart,
  onDragOver,
  onAddNewTask,
  onTaskSet,
}) => {
  const { id, title, description, priority } = data;

  return (
    <div
      className="item"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      <div className="item__container">
        <div className="item__top-container">
          <div>
            {priority && (
              <img src={icon} alt="Priority" className="item__priority-icon" />
            )}
            {!id ? (
              <ItemInput onChange={onTaskSet} />
            ) : (
              <span className="item__title">{title}</span>
            )}
          </div>
        </div>
        <div className="item__description">{description}</div>
      </div>
      <div className="item__dots-container">
        <button className="item__dots">
          <Dots />
        </button>
      </div>
    </div>
  );
};

export default Item;

interface ItemInputProps {
  onChange: (task: ItemType) => void;
}
const ItemInput: FC<ItemInputProps> = ({ onChange }) => {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      className="item-input"
      placeholder="Enter task title"
      value={value}
      autoFocus
      onChange={(e) => setValue(e.currentTarget.value)}
    />
  );
};
