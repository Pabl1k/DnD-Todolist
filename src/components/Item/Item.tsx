import { FC } from "react";
import icon from "../../assets/icons/priority.svg";
import { ItemType } from "../../types/item";
import { Dots } from "../../common/DotsTag";
import "./Item.scss";

interface Props {
  data: ItemType;
}

const Item: FC<Props> = ({ data }) => {
  const { title, description, date, priority } = data;

  return (
    <div className="item" draggable>
      <div className="item__container">
        <div className="item__top-container">
          <div>
            {priority && (
              <img src={icon} alt="Priority" className="item__priority-icon" />
            )}
            <span className="item__title">{title}</span>
          </div>
          <span className="item__date">{date}</span>
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
