import { useAppContext } from "../../hooks/useAppContext";
import { TaskType, UpdateTaskType } from "../../types/item";
import { Settings } from "../../types/settings";
import { COLLECTION, CollectionType } from "../destination";

export const useManagement = () => {
  const { store } = useAppContext();

  const addTask = async (collection: CollectionType, newTask: TaskType) => {
    await store.collection(collection).add(newTask);
  };

  const updateTask = async (collection: CollectionType, taskId: string, update: UpdateTaskType) => {
    const snapshot = await store.collection(collection).limit(1).where("id", "==", taskId).get();

    await snapshot.docs[0].ref.update(update);
  };

  const updateSettings = async (update: Settings) => {
    const snapshot = await store.collection(COLLECTION.SETTINGS).limit(1).get();

    await snapshot.docs[0].ref.update(update);
  };

  const deleteTask = async (collection: CollectionType, taskId: string) => {
    const snapshot = await store.collection(collection).limit(1).where("id", "==", taskId).get();

    await snapshot.docs[0].ref.delete();
  };

  return {
    addTask,
    updateTask,
    updateSettings,
    deleteTask,
  };
};
