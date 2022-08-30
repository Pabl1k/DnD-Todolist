type Language = "English" | "Lithuanian" | "Russian";
type FontSize = "small" | "large";
type Theme = "light" | "dark";

interface Background {
  board: string;
  item: string;
  page: string;
}

export interface InitialSettingsType {
  background: Background;
  language: Language;
  fontSize: FontSize;
  theme: Theme
}
