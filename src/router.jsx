import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Dashboard from "./pages/dashboard";
import Logout from "./pages/logout";
import SignIn from "./pages/signin";
  
const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <App />,
    // },
    {
        path: "/",
        element: <SignIn />,
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