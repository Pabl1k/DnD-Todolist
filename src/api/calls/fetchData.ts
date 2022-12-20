import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAppContext } from "../../hooks/useAppContext";
import { TaskType } from "../../types/item";
import { Settings as SettingsType } from "../../types/settings";
import { COLLECTION } from "../destination";

export const useFetchDataAPI = () => {
  const { store } = useAppContext();

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

  const [settings, settingsLoading] = useCollectionData<SettingsType>(
    store.collection(COLLECTION.SETTINGS)
  );

  const loading =
    toDoLoading || inProgressLoading || doneLoading || settingsLoading;

  return {
    toDoState,
    toDoError,
    inProgressState,
    inProgressError,
    doneState,
    doneError,
    settings,
    loading,
  };
};
