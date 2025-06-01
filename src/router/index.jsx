import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Private from "../private";
import MainLayout from "../MainLayout";
import Group from "../components/group";
import Profile from "../pages/profile";

export const router = createBrowserRouter([
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "/main/:id",
        element: <Group />,
      },
      {
        path: "/main/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Private />,
  },
]);
