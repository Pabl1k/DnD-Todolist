import { useCollectionData } from "react-firebase-hooks/firestore";
import { TaskType } from "../../types/item";
import { useCustomContext } from "../../hooks/useCustomContext";
import { COLLECTION } from "../destination";
import { Settings as SettingsType } from "../../types/settings";

export const useFetchDataAPI = () => {
  const { store } = useCustomContext();

  const [toDoState, toDoLoading, toDoError] = useCollectionData<TaskType>(
    store.collection(COLLECTION.TODO).orderBy("priority", "desc")
  );

  const [inProgressState, inProgressLoading, inProgressError] =
    useCollectionData<TaskType>(
      store.collection(COLLECTION.IN_PROGRESS).orderBy("priority", "desc")
    );

  const [doneState, doneLoading, doneError] = useCollectionData<TaskType>(
    store.collection(COLLECTION.DONE).orderBy("priority", "desc")
  );

  const [settings] = useCollectionData<SettingsType>(
    store.collection(COLLECTION.SETTINGS)
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
    settings,
  };
};
