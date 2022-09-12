import {Auth} from "firebase/auth";
import {Firestore} from "firebase/firestore";

export interface IContext {
  auth: Auth;
  store: Firestore;
}
