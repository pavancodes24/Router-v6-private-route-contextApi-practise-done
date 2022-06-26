import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContextProvider";

export const Login = () => {
  const initState = {
    name: "",
    email: "",
    password: ""
  };

  const [login, setLogin] = useState(initState);
  const {
    name: cname,
    email: cemail,
    password: cpassword,
    isAuth,
    AuthenticateUser
  } = useContext(AppContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    if (
      login.name === cname &&
      login.email === cemail &&
      login.password === cpassword
    ) {
      AuthenticateUser();
      console.log("login successful");
    }
  };
  return isAuth ? (
    <h1>User Logged in Successfully</h1>
  ) : (
    <form onSubmit={handleSubmit} style={{ margin: "50px" }}>
      <input
        type="text"
        placeholder="enter name"
        name="name"
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        placeholder="enter email"
        name="email"
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        placeholder="enter password"
        name="password"
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Login" />
    </form>
  );
};
