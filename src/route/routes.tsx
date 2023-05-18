import { createBrowserRouter } from "react-router-dom";
import SignOrLogin from "../pages/SignOrLogin";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <SignOrLogin />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
