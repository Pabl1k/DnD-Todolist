import { FC } from "react";
import "./Language.scss";
import Icon, { IconName } from "../../../Icon";

interface ILanguages {
  id: number;
  language: string;
  flag: IconName;
}

interface Props {}

const Language: FC<Props> = () => {
  const languages: ILanguages[] = [
    { id: 1, language: "English", flag: "EnFlag" },
    { id: 2, language: "Lietuvių", flag: "LtFlag" },
    { id: 3, language: "Русский", flag: "RuFlag" },
  ];

  return (
    <div className="language">
      {languages.map((l) => (
        <div key={l.id} className="language__single">
          <Icon name={l.flag} alt={`${l.language} flag`} />
          <span>{l.language}</span>
        </div>
      ))}
    </div>
  );
};

export default Language;
