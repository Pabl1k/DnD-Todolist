export const STORAGE_KEYS = {
  USER_ID: "userId"
}

type Method = "set" | "get" | "delete";

export const useLocalStorage = (method: Method, key: string, value?: string) => {
  if (method === "set" && value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  if (method === "get") {
    const res = localStorage.getItem(key)

    if (res) {
      return JSON.parse(res);
    }

    return null;
  }

  return localStorage.removeItem(key);
};
