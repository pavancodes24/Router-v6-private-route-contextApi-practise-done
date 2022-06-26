import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const AuthenticateUser = () => {
    setIsAuth(!isAuth);
  };
  const loginDetails = {
    name: "pavan",
    email: "pavan@gmail.com",
    password: "pavan",
    isAuth,
    AuthenticateUser,
    setIsAuth
  };

  return (
    <AppContext.Provider value={loginDetails}>{children}</AppContext.Provider>
  );
};
