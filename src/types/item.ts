import firebase from "firebase";

export interface ItemType {
  id: string;
  title: string;
  description?: string;
  priority?: boolean;
  pinned?: boolean;
  createdAt?: firebase.firestore.FieldValue;
}
