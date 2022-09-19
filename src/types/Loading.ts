export interface ILoading {
  addTask: boolean;
  updateTask: boolean;
  deleteTask: boolean;
}

export interface ILoadingContext extends ILoading {
  setAddTask: () => void;
  setUpdateTask: () => void;
  setDeleteTask: () => void;
  clearLoadings: () => void;
}
