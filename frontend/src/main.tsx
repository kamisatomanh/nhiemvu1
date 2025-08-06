import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import Login from "./auth/login";
import CssBaseline from "@mui/material/CssBaseline";
import SignUp from "./auth/signup";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <SignUp />
  </StrictMode>
);
