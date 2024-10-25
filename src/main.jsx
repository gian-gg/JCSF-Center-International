import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import "./assets/index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
