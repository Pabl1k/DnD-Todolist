import { FC } from "react";
import Google from "../../assets/icons/google.svg";
import { useCustomContext } from "../../hooks/useCustomContext";
import firebase from "firebase";
import "./Login.scss";

interface Props {}

const Login: FC<Props> = () => {
  const { auth } = useCustomContext();

  const loginHandler = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };

  return (
    <div className="login">
      <button className="button" onClick={loginHandler}>
        Login with <Google className="login__google-icon" alt="google icon" />
      </button>
    </div>
  );
};

export default Login;
