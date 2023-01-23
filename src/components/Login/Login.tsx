import firebase from "firebase";
import "firebase/Login.tsx"
import { useAppContext } from "../../hooks/useAppContext";
import Icon from "../Icon/Icon";
import "./Login.scss";
import { STORAGE_KEYS, useLocalStorage } from "../../hooks/useLocalStorage";

const Login = () => {
  const { auth } = useAppContext();

  const loginHandler = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      const res = await auth.signInWithPopup(provider);
      useLocalStorage('set', STORAGE_KEYS.USER_ID, res.user?.uid)
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
