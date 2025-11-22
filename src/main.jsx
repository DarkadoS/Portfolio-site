import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";   // 👈 make sure file name matches
import "./index.css";

const root = document.getElementById("root");
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
