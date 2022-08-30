import MainPage from "./containers/MainPage/MainPage";
import { useState } from "react";
import { initialSettings } from "./common/InitialSettings";
import { InitialSettingsType } from "./types/settings";
import "./Setup.scss";

const Setup = () => {
  const [settings, setSettings] =
    useState<InitialSettingsType>(initialSettings);

  return (
    <div className="app-setup">
      <MainPage />
    </div>
  );
};

export default Setup;
