import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./api/config";
import { IContext } from "./types/context";
import Setup from "./Setup";
import "./styles/index.scss";

const base = initializeApp(firebaseConfig);

const auth = getAuth();
const store = getFirestore(base);

export const Context = createContext<IContext>({ auth, store });
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Context.Provider
    value={{
      auth,
      store,
    }}
  >
    <Setup />
  </Context.Provider>
);
