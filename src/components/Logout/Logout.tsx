import { useAppContext } from "../../hooks/useAppContext";
import "./Logout.scss";
import { STORAGE_KEYS, useLocalStorage } from "../../hooks/useLocalStorage";

const Logout = () => {
  const { auth } = useAppContext();

  const logoutHandler = async () => {
    useLocalStorage("delete", STORAGE_KEYS.USER_ID);

    await auth.signOut();
  };

  return (
    <button className="logout" onClick={logoutHandler}>
      Sign out
    </button>
  );
};

export default Logout;
