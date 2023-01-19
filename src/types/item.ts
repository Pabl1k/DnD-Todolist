import firebase from "firebase";
import { CollectionType } from "../api/destination";

export interface TaskType {
  id: string;
  title: string;
  description?: string;
  priority?: boolean;
  pinned?: boolean;
  createdAt?: firebase.firestore.FieldValue;
  owner: string;
}

export interface UpdateTaskType {
  title?: string;
  description?: string;
  priority?: boolean;
  pinned?: boolean;
}

export interface ITaskMenuData {
  collection: CollectionType;
  taskId: string;
  priority?: boolean;
  title?: string;
  description?: string;
}
