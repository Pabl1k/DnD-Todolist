import { FC } from "react";
import Icon from "../../../Icon/Icon";
import "./Theme.scss";

interface Props {
  currentMode: "light" | "dark";
}

const Theme: FC<Props> = ({ currentMode }) => {
  return (
    <div className="theme" title={`Switch to ${currentMode === "light" ? "dark" : "light"} mode`}>
      <span>Theme</span>
      <Icon
        name={currentMode === "light" ? "dark-theme" : "light-theme"}
        alt={`${currentMode} mode`}
        className="theme__icon"
      />
    </div>
  );
};

export default Theme;
