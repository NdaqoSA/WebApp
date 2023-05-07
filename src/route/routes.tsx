import { createBrowserRouter } from "react-router-dom";
import SignOrLogin from "../pages/SignOrLogin";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <SignOrLogin />,
  },
]);
