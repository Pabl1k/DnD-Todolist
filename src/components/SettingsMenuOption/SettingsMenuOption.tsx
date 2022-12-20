import { FC, ReactNode } from "react";
import "./SettingsMenuOption.scss";

interface Props {
  lastChild: boolean;
  children: ReactNode;
}

const SettingsMenuOption: FC<Props> = ({ lastChild, children }) => {
  return <div className={`settings-menu-option ${lastChild && "last-child"}`}>{children}</div>;
};

export default SettingsMenuOption;
