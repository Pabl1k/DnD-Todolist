import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCustomContext } from "./hooks/useCustomContext";
import MainPage from "./containers/MainPage/MainPage";
import Login from "./components/Login/Login";
import "./Setup.scss";

const Setup = () => {
  const { auth } = useCustomContext();
  const [user] = useAuthState(auth);

  return (
    <div className="app-setup">
      {user ? (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </div>
  );
};

export default Setup;
