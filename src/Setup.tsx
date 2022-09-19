import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCustomContext } from "./hooks/useCustomContext";
import MainPage from "./containers/MainPage/MainPage";
import Login from "./components/Login/Login";
import { createContext } from "react";
import { ILoadingContext } from "./types/Loading";
import "./Setup.scss";
import { useLoading } from "./hooks/useLoading";

export const LoadingContext = createContext<ILoadingContext | null>(null);

const Setup = () => {
  const { auth } = useCustomContext();
  const [user] = useAuthState(auth);

  const backgroundImg = {
    backgroundImage: `url(${""})`,
  };

  const {
    addTask,
    updateTask,
    deleteTask,
    setAddTask,
    setUpdateTask,
    setDeleteTask,
    clearLoadings,
  } = useLoading();

  const loadingContextState = {
    addTask,
    updateTask,
    deleteTask,
    setAddTask,
    setUpdateTask,
    setDeleteTask,
    clearLoadings,
  };

  return (
    <div className="app-setup" style={backgroundImg}>
      {user ? (
        <Routes>
          <Route
            path="/"
            element={
              <LoadingContext.Provider value={loadingContextState}>
                <MainPage />
              </LoadingContext.Provider>
            }
          />
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
