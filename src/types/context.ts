import firebase from "firebase";

export interface IContext {
  firebase: typeof firebase;
  auth: firebase.auth.Auth;
  store:  firebase.firestore.Firestore;
}
