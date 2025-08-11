import "./App.css";
import { Routes, Route } from "react-router";

import Client from "./client/Client";
import Login from "./auth/Login";
import SignUp from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Client />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
