import { FC } from "react";
import { ItemType } from "../../types/item";
import { Dots } from "../../common/DotsTag";
import Icon from "../Icon";
import "./Item.scss";

interface Props {
  data: ItemType;
  onDragStart: () => void;
  onDragOver: () => void;
}

const Item: FC<Props> = ({ data, onDragStart, onDragOver }) => {
  const { title, description, priority } = data;

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
              <Icon name="priority" className="item__priority-icon" />
            )}
            <span className="item__title">{title}</span>
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
