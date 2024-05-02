import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./Context/AuthContext";
// import { UserProvider } from "./Context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <UserProvider> */}
    <AuthProvider>
      <App />
    </AuthProvider>
    {/* </UserProvider> */}
  </React.StrictMode>,
);

reportWebVitals();
