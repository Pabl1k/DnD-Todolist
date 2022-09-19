import { TaskType, UpdateTaskType } from "../../types/item";
import {
  useCustomContext,
  useLoadingContext,
} from "../../hooks/useCustomContext";
import { CollectionType } from "../destination";

export const useManagement = () => {
  const { store } = useCustomContext();
  const {
    setAddTaskLoading,
    setUpdateTaskLoading,
    setDeleteTaskLoading,
    clearLoadings,
  } = useLoadingContext();

  const addTask = async (collection: CollectionType, newTask: TaskType) => {
    setAddTaskLoading();
    await store.collection(collection).add(newTask);
    clearLoadings();
  };

  const updateTask = async (
    collection: CollectionType,
    taskId: string,
    update: UpdateTaskType
  ) => {
    setUpdateTaskLoading();
    const snapshot = await store
      .collection(collection)
      .limit(1)
      .where("id", "==", taskId)
      .get();
    await snapshot.docs[0].ref.update(update);
    clearLoadings();
  };

  const deleteTask = async (collection: CollectionType, taskId: string) => {
    setDeleteTaskLoading();
    const snapshot = await store
      .collection(collection)
      .limit(1)
      .where("id", "==", taskId)
      .get();

    await snapshot.docs[0].ref.delete();
    clearLoadings();
  };

  return {
    addTask,
    updateTask,
    deleteTask,
  };
};
