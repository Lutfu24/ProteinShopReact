import React from "react";
import "./index.css";
import App from "./App";
import Cookies from "js-cookie";
import axios from "axios";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const token = Cookies.get("token");
root.render(<App />);

if (token !== undefined) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + `${token}`;
} else {
  axios.defaults.headers.common["Authorization"] = "";
}
