import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AppContext);
  const handleLogout = () => {
    if (isAuth) setIsAuth(!isAuth);
  };
  return (
    <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Login">
        <button onClick={handleLogout}>{isAuth ? "Logout" : "Login"}</button>
      </Link>
      <Link to="/Profile">
        <button>Profile</button>
      </Link>
    </div>
  );
};
