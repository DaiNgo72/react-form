import React from "react";
import ReactDOM from "react-dom/client";

// Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

// CSS
import "./config/style/modern-normalize.css";
import "./config/style/tailwind.css";
import "./config/style/font-family.css";
import "./config/style/main.css";
import { Provider } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
