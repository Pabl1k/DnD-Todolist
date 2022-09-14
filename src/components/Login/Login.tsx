import { useCustomContext } from "../../hooks/useCustomContext";
import firebase from "firebase";
import Icon from "../Icon";
import "./Login.scss";

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
