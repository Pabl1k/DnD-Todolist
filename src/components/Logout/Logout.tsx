import { useCustomContext } from "../../hooks/useCustomContext";
import "./Logout.scss";

const Logout = () => {
  const { auth } = useCustomContext();

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
