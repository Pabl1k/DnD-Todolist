import { UpdateItem } from "../../types/item";
import { useCustomContext } from "../../hooks/useCustomContext";
import { CollectionType } from "../destination";

export const useManagement = () => {
  const { store } = useCustomContext();

  const updateTask = async (
    collection: CollectionType,
    docId: string,
    update: UpdateItem
  ) => {
    await store.collection(collection).doc(docId).update(update);
  };

  const deleteTask = async (collection: CollectionType, taskId: string) => {
    const snapshot = await store
      .collection(collection)
      .limit(1)
      .where("id", "==", taskId)
      .get();

    await snapshot.docs[0].ref.delete();
  };

  return {
    updateTask,
    deleteTask,
  };
};
