import firebase from "firebase";

export interface TaskType {
  id: string;
  title: string;
  description?: string;
  priority?: boolean;
  pinned?: boolean;
  createdAt?: firebase.firestore.FieldValue;
}

export interface UpdateTaskType {
  title?: string;
  description?: string;
  priority?: boolean;
  pinned?: boolean;
}
