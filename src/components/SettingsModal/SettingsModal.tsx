import {FC} from "react";
import "./SettingsModal.scss";

interface IMenu {
  id: number;
  title: string;
  onClick?: () => void;
}

interface Props {
  open: boolean;
}

const SettingsModal: FC<Props> = ({ open }) => {
  const menu: IMenu[] = [
    { id: 1, title: "Background" },
    { id: 2, title: "Language" },
    { id: 3, title: "Font size" },
    { id: 4, title: "Theme" },
  ];

  return open ? (
    <div className="settings-modal">
      <div className="settings-modal__title">
        <span>Settings</span>
      </div>
      <div>
        {menu.map((m) => (
          <div key={m.id} className="settings-modal__single">
            <span>{m.title}</span>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default SettingsModal;
