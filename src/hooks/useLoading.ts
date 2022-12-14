import { useState } from "react";
import { initialLoadingState } from "../common/LoadingState";
import { ILoading } from "../types/Loading";

export const useLoading = () => {
  const [loading, setLoading] = useState<ILoading>(initialLoadingState);
  const { addTask, updateTask, deleteTask } = loading;

  const setAddTask = () => setLoading({ ...loading, addTask: true });
  const setUpdateTask = () => setLoading({ ...loading, updateTask: true });
  const setDeleteTask = () => setLoading({ ...loading, deleteTask: true });
  const clearLoadings = () => setLoading(initialLoadingState);

  return {
    addTask,
    updateTask,
    deleteTask,
    setAddTask,
    setUpdateTask,
    setDeleteTask,
    clearLoadings,
  };
};
