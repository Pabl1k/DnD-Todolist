import { FC } from "react";
import EN from '../../../../assets/icons/EN.svg';
import LT from '../../../../assets/icons/LT.svg';
import RU from '../../../../assets/icons/RU.svg';
import "./Language.scss";

interface Props {}

const Language: FC<Props> = () => {
  const options = [
    { id: 1, language: "English", flag: EN },
    { id: 2, language: "Lietuvių", flag: LT },
    { id: 3, language: "Русский", flag: RU },
  ];

  return (
    <div className="language">
      {options.map((opt) => (
        <div key={opt.id} className="language__single">
          <img src={opt.flag} alt={`${opt.language} flag`} className="language__flag" />
          <span>{opt.language}</span>
        </div>
      ))}
    </div>
  );
};

export default Language;
