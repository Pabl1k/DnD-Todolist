import { useCustomContext } from "../../hooks/useCustomContext";
import firebase from "firebase";
import Icon from "../Icon/Icon";
import "./Login.scss";

/**
 *  TODO on login modal close shoot out an error
 */

const Login = () => {
  const { auth } = useCustomContext();

  const loginHandler = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
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
