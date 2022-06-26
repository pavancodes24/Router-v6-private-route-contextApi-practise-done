import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<PrivateRoute />}>
          <Route path="/Profile" element={<Profile />} />
        </Route>
      </Routes>
      {/* <Login /> */}
    </div>
  );
}
