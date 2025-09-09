import "./App.css";
import { Routes, Route } from "react-router";

import Client from "./client/Client";
import Login from "./auth/Login";
import SignUp from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import Admin from "./admin/Admin";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Client />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute roles={["admin"]}>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
