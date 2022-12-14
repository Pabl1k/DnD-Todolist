import { createRef, FC, useState } from "react";
import Icon from "../../components/Icon/Icon";
import SettingsModal from "../../components/SettingsModal/SettingsModal";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import "./Settings.scss";

interface Props {
  setBackgroundColor: (color: string) => void;
}

const Settings: FC<Props> = ({ setBackgroundColor }) => {
  const [open, setOpen] = useState(false);

  const modalRef = createRef<HTMLDivElement>();
  useOutsideClick(modalRef, () => setOpen(false));

  return (
    <div className="settings" ref={modalRef}>
      <SettingsModal open={open} setBackgroundColor={setBackgroundColor} />
      <button type="button" className={`settings__button ${open ? "open" : "closed"}`} onClick={() => setOpen(!open)}>
        <Icon name="settings" height={50} width={50} />
      </button>
    </div>
  );
};

export default Settings;
