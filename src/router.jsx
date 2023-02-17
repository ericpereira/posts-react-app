import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Logout from "./pages/logout";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
  
const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
    },
    {
        path: "/register",
        element: <SignUp />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/logout",
        element: <Logout />,
    },
]);

export default router