import { useContext } from "react";
import { Context } from "../index";

export const useCustomContext = () => {
  const { firebase ,auth, store } = useContext(Context);

  return {
    firebase,
    auth,
    store,
  };
};
