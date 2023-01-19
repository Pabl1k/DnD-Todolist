import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAppContext } from "../../hooks/useAppContext";
import { TaskType } from "../../types/item";
import { Settings as SettingsType } from "../../types/settings";
import { COLLECTION } from "../destination";
import { STORAGE_KEYS, useLocalStorage } from "../../hooks/useLocalStorage";

export const useFetchDataAPI = () => {
  const { store } = useAppContext();
  const userId = useLocalStorage("get", STORAGE_KEYS.USER_ID);

  const [toDoState, toDoLoading, toDoError] = useCollectionData<TaskType>(
    store.collection(COLLECTION.TODO).where("owner", "==", userId)
  );

  const [inProgressState, inProgressLoading, inProgressError] = useCollectionData<TaskType>(
    store.collection(COLLECTION.IN_PROGRESS).where("owner", "==", userId)
  );

  const [doneState, doneLoading, doneError] = useCollectionData<TaskType>(
    store.collection(COLLECTION.DONE).where("owner", "==", userId)
  );

  const [settings, settingsLoading] = useCollectionData<SettingsType>(store.collection(COLLECTION.SETTINGS));

  const loading = toDoLoading || inProgressLoading || doneLoading || settingsLoading;

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
