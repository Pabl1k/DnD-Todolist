import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import { useFetchDataAPI } from "./api/calls/fetchData";
import Spinner from "./components/Loaders/Spinner/Spinner";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import MainPage from "./containers/MainPage/MainPage";
import Settings from "./containers/Settings/Settings";
import { useAppContext } from "./hooks/useAppContext";
import { useLoading } from "./hooks/useLoading";
import { ILoadingContext } from "./types/Loading";
import "./Setup.scss";

export const LoadingContext = createContext<ILoadingContext | null>(null);

const Setup = () => {
  const { auth } = useAppContext();
  const [authorized, authorizedLoading] = useAuthState(auth);
  const loadingContextState = useLoading();
  const { settings, loading: dataLoading } = useFetchDataAPI();

  const color = settings?.map((x) => x.backgroundColor).join();
  const [backgroundColor, setBackgroundColor] = useState<string>("");

  useEffect(() => {
    if (color) {
      setBackgroundColor(color);
    }
  }, [color]);

  if (authorizedLoading || dataLoading) {
    return <Spinner />;
  }

  return (
    <div className="app-setup" style={{ backgroundColor }}>
      {authorized ? (
        <Routes>
          <Route
            path="/board"
            element={
              <LoadingContext.Provider value={loadingContextState}>
                <Logout />
                <MainPage />
                <Settings setBackgroundColor={setBackgroundColor} />
              </LoadingContext.Provider>
            }
          />
          <Route path="*" element={<Navigate to={"/board"} />} />
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
