import { FC, useState } from "react";
import "./SettingsModal.scss";
import { IMenu } from "../../types/settingsModal";
import SettingsMenuOption from "../SettingsMenuOption/SettingsMenuOption";
import FontSize from "../SettingsMenuOption/options/FontSize/FontSize";

interface Props {
  open: boolean;
}

const SettingsModal: FC<Props> = ({ open }) => {
  const menu: IMenu[] = [
    { id: 1, title: "Background", content: <div>text</div> },
    { id: 2, title: "Language", content: <div>text</div> },
    { id: 3, title: "Font size", content: <FontSize /> },
    { id: 4, title: "Theme", content: <div>text</div> },
  ];

  const [openOptionIndex, setOpenOptionIndex] = useState<number | null>(null);

  const optionClickHandler = (index: number) => {
    setOpenOptionIndex(openOptionIndex === index ? null : index);
  };

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
              <span>{m.title}</span>
            </button>
            {openOptionIndex === index && (
              <SettingsMenuOption lastChild={menu.length === index + 1}>
                {m.content}
              </SettingsMenuOption>
            )}
          </>
        ))}
      </div>
    </div>
  ) : null;
};

export default SettingsModal;
