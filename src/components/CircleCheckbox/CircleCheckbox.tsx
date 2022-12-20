import { FC } from "react";
import "./CircleCheckbox.scss";

interface Props {
  active: boolean;
}

const CircleCheckbox: FC<Props> = ({ active }) => {
  return (
    <div className="circle-checkbox">
      {active && <div className="circle-checkbox__active" />}
    </div>
  );
};

export default CircleCheckbox;
