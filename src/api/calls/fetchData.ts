import { useCollectionData } from "react-firebase-hooks/firestore";
import { TaskType } from "../../types/item";
import { useCustomContext } from "../../hooks/useCustomContext";
import { COLLECTION } from "../destination";

export const useFetchDataAPI = () => {
  const { store } = useCustomContext();

  const [toDoState, toDoLoading, toDoError] = useCollectionData<TaskType>(
    store.collection(COLLECTION.TODO).orderBy("createdAt", "desc")
  );

  const [inProgressState, inProgressLoading, inProgressError] =
    useCollectionData<TaskType>(
      store.collection(COLLECTION.IN_PROGRESS).orderBy("createdAt", "desc")
    );

  const [doneState, doneLoading, doneError] = useCollectionData<TaskType>(
    store.collection(COLLECTION.DONE).orderBy("createdAt", "desc")
  );

  return {
    toDoState,
    toDoLoading,
    toDoError,
    inProgressState,
    inProgressLoading,
    inProgressError,
    doneState,
    doneLoading,
    doneError,
  };
};