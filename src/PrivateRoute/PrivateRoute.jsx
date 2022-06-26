import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AppContext);
  return isAuth ? <Outlet /> : <Navigate to="/Login" />;
};
