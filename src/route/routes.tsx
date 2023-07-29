import { createBrowserRouter } from "react-router-dom";
import SignOrLogin from "../pages/SignOrLogin";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Settings from "../pages/Settings";

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
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);
