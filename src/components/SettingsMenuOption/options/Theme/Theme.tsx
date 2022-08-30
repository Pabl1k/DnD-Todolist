import { FC } from "react";
import light from "../../../../assets/icons/light-theme.svg";
import dark from "../../../../assets/icons/dark-theme.svg";
import "./Theme.scss";

interface Props {
  currentMode: "light" | "dark";
}

const Theme: FC<Props> = ({ currentMode }) => {
  return (
    <div className="theme">
      <span>Theme</span>
      <div
        title={`Switch to ${currentMode === "light" ? "dark" : "light"} mode`}
      >
        <img
          src={currentMode === "light" ? dark : light}
          alt={`${currentMode} mode`}
        />
      </div>
    </div>
  );
};

export default Theme;
