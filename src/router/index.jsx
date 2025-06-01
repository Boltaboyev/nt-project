import {createBrowserRouter} from "react-router-dom"
import Login from "../pages/auth/login"
import Register from "../pages/auth/register"
import Private from "../private"
import Profile from "../pages/profile"
import Groups from "../pages/groups"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Private />,
        children: [
            {
                path: "/:id",
                element: <Groups />,
            },
            {
                path: "/profile",
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
])
