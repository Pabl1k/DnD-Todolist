import { useAppContext } from "../../hooks/useAppContext";
import "./Logout.scss";

const Logout = () => {
  const { auth } = useAppContext();

  const logoutHandler = async () => {
    await auth.signOut();
  };

  return (
    <button className="logout" onClick={logoutHandler}>
      Sign out
    </button>
  );
};

export default Logout;
