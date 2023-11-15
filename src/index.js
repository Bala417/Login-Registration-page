import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Store from "./State/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider Store={Store}>
  <App />
  // </Provider>
);
