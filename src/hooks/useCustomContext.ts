import { useContext } from "react";
import { Context } from "../index";
import { LoadingContext } from "../Setup";

export const useCustomContext = () => {
  const { firebase, auth, store } = useContext(Context);

  return {
    firebase,
    auth,
    store,
  };
};

export const useLoadingContext = () => {
  const loading = useContext(LoadingContext)!;

  return {
    addTaskLoading: loading.addTask,
    updateTaskLoading: loading.updateTask,
    deleteTaskLoading: loading.deleteTask,
    setAddTaskLoading: loading.setAddTask,
    setUpdateTaskLoading: loading.setUpdateTask,
    setDeleteTaskLoading: loading.setDeleteTask,
    clearLoadings: loading.clearLoadings,
  };
};
