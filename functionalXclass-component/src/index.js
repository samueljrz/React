import React from "react";
import ReactDOM from "react-dom";

//import App from "./components/mousecoords/App";
import App from "./components/pokemon/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
