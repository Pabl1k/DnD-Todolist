import { TaskType, UpdateTaskType } from "../../types/item";
import { useCustomContext } from "../../hooks/useCustomContext";
import { CollectionType } from "../destination";

export const useManagement = () => {
  const { store } = useCustomContext();

  const addTask = async (collection: CollectionType, newTask: TaskType) => {
    await store.collection(collection).add(newTask);
  };

  const updateTask = async (
    collection: CollectionType,
    taskId: string,
    update: UpdateTaskType
  ) => {
    const snapshot = await store
      .collection(collection)
      .limit(1)
      .where("id", "==", taskId)
      .get();
    await snapshot.docs[0].ref.update(update);
  };

  const deleteTask = async (collection: CollectionType, taskId: string) => {
    const snapshot = await store
      .collection(collection)
      .limit(1)
      .where("id", "==", taskId)
      .get();

    await snapshot.docs[0].ref.delete();
  };

  return {
    addTask,
    updateTask,
    deleteTask,
  };
};
