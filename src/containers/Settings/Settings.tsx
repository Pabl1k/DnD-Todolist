import { createRef, useState } from "react";
import icon from "../../assets/icons/settings.svg";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import SettingsModal from "../../components/SettingsModal/SettingsModal";
import "./Settings.scss";

const Settings = () => {
  const [open, setOpen] = useState(false);

  const modalRef = createRef<HTMLDivElement>();
  useOutsideClick(modalRef, () => setOpen(false));

  return (
    <div className="settings" ref={modalRef}>
      <div className="settings__modal">
        <SettingsModal open={open} />
      </div>
      <button
        type="button"
        className={`settings__button ${open ? "open" : "closed"}`}
        onClick={() => setOpen(!open)}
      >
        <img src={icon} alt="settings" />
      </button>
    </div>
  );
};

export default Settings;

// first visit notification. save in LS
