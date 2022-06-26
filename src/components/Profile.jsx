import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";

export const Profile = () => {
  const { name, email, password } = useContext(AppContext);
  return (
    <div>
      {/* only shows if user is authenticated */}
      <h1>name:{name} </h1>
      <h1>email:{email}</h1>
      <h1>password:{password}</h1>
    </div>
  );
};
