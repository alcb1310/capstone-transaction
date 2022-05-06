import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ImageContextProvider } from "./context/ImageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ImageContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ImageContextProvider>
);
