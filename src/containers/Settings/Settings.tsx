import { createRef, FC, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import SettingsModal from "../../components/SettingsModal/SettingsModal";
import Icon from "../../components/Icon";
import "./Settings.scss";

interface Props {
  onBackgroundOpen: () => void;
}

const Settings: FC<Props> = ({ onBackgroundOpen }) => {
  const [open, setOpen] = useState(false);

  const modalRef = createRef<HTMLDivElement>();
  useOutsideClick(modalRef, () => setOpen(false));

  return (
    <div className="settings" ref={modalRef}>
      <SettingsModal open={open} onBackgroundOpen={onBackgroundOpen} />
      <button
        type="button"
        className={`settings__button ${open ? "open" : "closed"}`}
        onClick={() => setOpen(!open)}
      >
        <Icon name="settings" height={45} width={45} />
      </button>
    </div>
  );
};

export default Settings;

// first visit notification. save in LS
