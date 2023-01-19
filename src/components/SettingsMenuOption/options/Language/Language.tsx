import { FC } from "react";
import "./Language.scss";

interface ILanguages {
  id: number;
  language: string;
  flag: '';
}

interface Props {}

const Language: FC<Props> = () => {
  const languages: ILanguages[] = [
    { id: 1, language: "English", flag: '' },
    { id: 2, language: "Lietuvių", flag: '' },
    { id: 3, language: "Русский", flag: '' },
  ];

  return (
    <div className="language">
      {languages.map((l) => (
        <div key={l.id} className="language__single">
          <img src={l.flag} alt={l.language} />
          <span>{l.language}</span>
        </div>
      ))}
    </div>
  );
};

export default Language;
