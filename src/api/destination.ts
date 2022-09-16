export type CollectionType = typeof COLLECTION[keyof typeof COLLECTION]

export const COLLECTION = {
  TODO: "toDo",
  IN_PROGRESS: "inProgress",
  DONE: "done",
};
