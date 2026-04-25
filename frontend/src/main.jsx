import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.jsx";
import { AttendEaseContextProvider } from "./Context/AttendEaseContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AttendEaseContextProvider>
        <App />
      </AttendEaseContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
