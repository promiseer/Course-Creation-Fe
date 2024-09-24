import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // CSS Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // JS Bootstrap
import App from "./App";

import "../public/css/app.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
