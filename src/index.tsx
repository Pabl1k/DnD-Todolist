import { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/index.tsx";
import Setup from "./Setup";
import { firebaseConfig } from "./api/config";
import "./styles/index.scss";
import { IContext } from "./types/context";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const store = firebase.firestore();

const ContextState = { firebase, auth, store };
export const Context = createContext<IContext>(ContextState);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Context.Provider value={ContextState}>
      <Setup />
    </Context.Provider>
  </BrowserRouter>
);
