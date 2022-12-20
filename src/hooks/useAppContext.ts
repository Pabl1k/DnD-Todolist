import { useContext } from "react";
import { Context } from "../index";

export const useAppContext = () => {
  const { firebase, auth, store } = useContext(Context);

  return {
    firebase,
    auth,
    store,
  };
};
