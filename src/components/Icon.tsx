import { FC } from "react";
import EN from "../assets/icons/flags/EN.svg";
import LT from "../assets/icons/flags/LT.svg";
import RU from "../assets/icons/flags/RU.svg";
import Dark from "../assets/icons/dark-theme.svg";
import Google from "../assets/icons/google.svg";
import Light from "../assets/icons/light-theme.svg";
import Priority from "../assets/icons/priority.svg";
import Settings from "../assets/icons/settings.svg";

export type IconName =
  | "EnFlag"
  | "LtFlag"
  | "RuFlag"
  | "dark-theme"
  | "google"
  | "light-theme"
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
    case "EnFlag":
      return <EN {...props} />;
    case "LtFlag":
      return <LT {...props} />;
    case "RuFlag":
      return <RU {...props} />;
    case "dark-theme":
      return <Dark {...props} />;
    case "google":
      return <Google {...props} />;
    case "light-theme":
      return <Light {...props} />;
    case "priority":
      return <Priority {...props} />;
    case "settings":
      return <Settings {...props} />;
    default:
      return <></>;
  }
};

export default Icon;