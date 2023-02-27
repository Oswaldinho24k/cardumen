import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Navbar, Footer } from "./components/common";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
