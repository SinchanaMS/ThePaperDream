import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./contexts/FilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
