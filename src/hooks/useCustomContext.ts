import { useContext } from "react";
import { LoadingContext } from "../Setup";
import { Context } from "../index";

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
