type Language = "English" | "Lithuanian" | "Russian";
type FontSize = "small" | "large";
type Theme = "light" | "dark";

export interface InitialSettingsType {
  background: string;
  language: Language;
  fontSize: FontSize;
  theme: Theme
}
