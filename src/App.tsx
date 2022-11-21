import { useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/auth";
import Dashboard from "./components/dashboard/dashboard";
import { AppRoute } from "./const";
import { useAppSelector, getAuth } from "./redux/reducer";
import { AuthorizationStatus } from "./redux/types";

export default function App(): JSX.Element {
  const auth = useAppSelector(getAuth);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    }
    if (auth === AuthorizationStatus.Auth) {
      navigate(AppRoute.Dashboard);
    }
  }, [auth, navigate]);


  // Лучше вынести в отдельный компонент Routing
  return (
    <Routes>
      <Route path={AppRoute.Login} element={<Auth />} />
      {auth === AuthorizationStatus.Auth ? (
        <Route path={AppRoute.Dashboard} element={<Dashboard />} />
      ) : (
        ""
      )}
    </Routes>
  );
}
