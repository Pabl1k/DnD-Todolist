import { FC } from "react";
import Dark from "../../assets/icons/dark-theme.svg";
import Google from "../../assets/icons/google.svg";
import Settings from "../../assets/icons/light-settings.svg";
import Light from "../../assets/icons/light-theme.svg";
import Dots from "../../assets/icons/menu-dots.svg";
import Priority from "../../assets/icons/priority.svg";

/**
 * TODO: try react-svg with single import
 */

export type IconName =
  | "EnFlag"
  | "LtFlag"
  | "RuFlag"
  | "dark-theme"
  | "google"
  | "light-theme"
  | "menu-dots"
  | "priority"
  | "settings";

interface Props {
  name: IconName;
  className?: string;
  alt?: string;
  height?: number;
  width?: number;
}

const Icon: FC<Props> = ({ name, className, alt, height = 30, width = 30 }) => {
  const props = {
    className,
    style: { width, height },
    alt: alt ? alt : `${name} icon`,
  };

  switch (name) {
    case "dark-theme":
      return <Dark {...props} />;
    case "google":
      return <Google {...props} />;
    case "light-theme":
      return <Light {...props} />;
    case "menu-dots":
      return <Dots {...props} />;
    case "priority":
      return <Priority {...props} />;
    case "settings":
      return <Settings {...props} />;
    default:
      return <></>;
  }
};

export default Icon;
