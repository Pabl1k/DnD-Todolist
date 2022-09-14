import { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "./api/config";
import { IContext } from "./types/context";
import Setup from "./Setup";
import "./styles/index.scss";

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
