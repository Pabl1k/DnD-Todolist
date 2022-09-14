import { useContext } from "react";
import { Context } from "../index";

export const useCustomContext = () => {
  const { auth, store } = useContext(Context);

  return {
    auth,
    store,
  };
};
