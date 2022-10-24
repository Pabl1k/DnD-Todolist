import { FC, useEffect, useState } from "react";
import { IMenu } from "../../types/settingsModal";
import SettingsMenuOption from "../SettingsMenuOption/SettingsMenuOption";
import { Background } from "../SettingsMenuOption/options/Background/Background";
import FontSize from "../SettingsMenuOption/options/FontSize/FontSize";
import Language from "../SettingsMenuOption/options/Language/Language";
import Theme from "../SettingsMenuOption/options/Theme/Theme";
import "./SettingsModal.scss";

interface Props {
  open: boolean;
  setBackgroundColor: (color: string) => void;
}

const SettingsModal: FC<Props> = ({ open, setBackgroundColor }) => {
  const [openOptionIndex, setOpenOptionIndex] = useState<number | null>(null);

  const menu: IMenu[] = [
    { id: 1, title: "Background" },
    { id: 2, title: "Language" },
    { id: 3, title: "Font size" },
  ];

  const optionClickHandler = (index: number) => {
    setOpenOptionIndex(openOptionIndex === index ? null : index);
  };

  const renderTitle = (title: string) => {
    return title === "Theme" ? (
      <Theme currentMode="light" />
    ) : (
      <span>{title}</span>
    );
  };

  const renderContent = (title: string) => {
    switch (title) {
      case "Background":
        return <Background setBackgroundColor={setBackgroundColor} />;
      case "Language":
        return <Language />;
      case "Font size":
        return <FontSize />;
      default:
        return;
    }
  };

  useEffect(() => {
    if (!open) {
      setOpenOptionIndex(null);
    }
  }, [open]);

  return open ? (
    <div className="settings-modal">
      <div className="settings-modal__title">
        <span>Settings</span>
      </div>
      <div>
        {menu.map((m, index) => (
          <>
            <button
              key={m.id}
              className={`settings-modal__single ${
                openOptionIndex === index && "active"
              }`}
              onClick={() => optionClickHandler(index)}
            >
              {renderTitle(m.title)}
            </button>
            {openOptionIndex === index && (
              <SettingsMenuOption lastChild={menu.length === index + 1}>
                {renderContent(m.title)}
              </SettingsMenuOption>
            )}
          </>
        ))}
      </div>
    </div>
  ) : null;
};

export default SettingsModal;
