import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ResetCss } from "./utils/styles/reset";
import { router } from "./route/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ResetCss />
    <RouterProvider router={router} />
  </React.StrictMode>
);
