import React from "react";
import ReactDOM from "react-dom/client";
import Setup from "./Setup";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Setup />
  </React.StrictMode>
);
