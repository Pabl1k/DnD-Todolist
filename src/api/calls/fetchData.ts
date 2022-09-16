import { useCollectionData } from "react-firebase-hooks/firestore";
import { ItemType } from "../../types/item";
import { useCustomContext } from "../../hooks/useCustomContext";
import { COLLECTION } from "../destination";

export const useFetchDataAPI = () => {
  const { store } = useCustomContext();

  const [toDoState, toDoLoading, toDoError] = useCollectionData<ItemType>(
    store.collection(COLLECTION.TODO).orderBy("createdAt")
  );

  const [inProgressState, inProgressLoading, inProgressError] =
    useCollectionData<ItemType>(store.collection(COLLECTION.IN_PROGRESS));

  const [doneState, doneLoading, doneError] = useCollectionData<ItemType>(
    store.collection(COLLECTION.DONE)
  );

  return {
    toDoState: toDoState?.reverse(),
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
