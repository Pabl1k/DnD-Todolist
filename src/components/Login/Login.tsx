import firebase from "firebase";
import { useAppContext } from "../../hooks/useAppContext";
import Icon from "../Icon/Icon";
import "./Login.scss";

const Login = () => {
  const { auth } = useAppContext();

  const loginHandler = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
    } catch (ex) {
      alert("Please try to login again");
      console.error(ex);
    }
  };

  return (
    <div className="login">
      <button className="button" onClick={loginHandler}>
        <span className="login__title">Login with</span>
        <Icon name="google" height={35} width={35} />
      </button>
    </div>
  );
};

export default Login;
