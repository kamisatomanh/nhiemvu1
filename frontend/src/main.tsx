import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
//import SignUp from "./auth/signup";
//import Login from "./auth/login";
import Forgort from "./auth/forgotpassword";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <Forgort />
  </StrictMode>
);
