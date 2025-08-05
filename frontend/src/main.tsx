import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./auth/login";
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <Login />
  </StrictMode>
);
