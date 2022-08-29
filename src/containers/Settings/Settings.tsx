import { createRef, useState } from "react";
import settingsIcon from "../../assets/icons/settings.svg";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import SettingsModal from "../../components/SettingsModal/SettingsModal";
import "./Settings.scss";

const Settings = () => {
  const [open, setOpen] = useState(true); // TODO: change to false

  const modalRef = createRef<HTMLDivElement>();
  useOutsideClick(modalRef, () => setOpen(false));

  return (
    <div className="settings" ref={modalRef}>
      <SettingsModal open={open} />
      <button
        type="button"
        className={`settings__button ${open ? "open" : "closed"}`}
        onClick={() => setOpen(!open)}
      >
        <img src={settingsIcon} alt="settings" />
      </button>
    </div>
  );
};

export default Settings;

// first visit notification. save in LS
