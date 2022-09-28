import { createContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCustomContext } from "./hooks/useCustomContext";
import MainPage from "./containers/MainPage/MainPage";
import Login from "./components/Login/Login";
import { ILoadingContext } from "./types/Loading";
import { useLoading } from "./hooks/useLoading";
import { useFetchDataAPI } from "./api/calls/fetchData";
import "./Setup.scss";

export const LoadingContext = createContext<ILoadingContext | null>(null);

const Setup = () => {
  const { auth } = useCustomContext();
  const [user] = useAuthState(auth);
  const loadingContextState = useLoading();
  const { settings } = useFetchDataAPI();

  const color = settings?.map((x) => x.backgroundColor).join();
  const [backgroundColor, setBackgroundColor] = useState<string>("");

  useEffect(() => {
    if (color) {
      setBackgroundColor(color);
    }
  }, [color]);

  return (
    <div className="app-setup" style={{ backgroundColor }}>
      {user ? (
        <Routes>
          <Route
            path="/"
            element={
              <LoadingContext.Provider value={loadingContextState}>
                <MainPage setBackgroundColor={setBackgroundColor} />
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
