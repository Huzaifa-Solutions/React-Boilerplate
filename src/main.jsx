import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import setupLocatorUI from "@locator/runtime";
import { ThemeProvider } from "./context/theme/themeContext.jsx";

if (import.meta.env.DEV) {
  setupLocatorUI();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
