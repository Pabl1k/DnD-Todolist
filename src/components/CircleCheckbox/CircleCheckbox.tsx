import { FC } from "react";
import "./CircleCheckbox.scss";

interface Props {
  active: boolean;
  onClick: () => void;
}

const CircleCheckbox: FC<Props> = ({ active, onClick }) => {
  return (
    <div className="circle-checkbox">
      {active && <div className="circle-checkbox__active" onClick={onClick} />}
    </div>
  );
};

export default CircleCheckbox;
