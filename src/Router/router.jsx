import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home";
import Products from "../Pages/Products/Products";
import Register from "../authentication/Register";
import login from "../authentication/login";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
               path:"/products",
                Component: Products,
            },
                        {
               path:"/login",
                Component: login,
            },
            {
               path:"/register",
                Component: Register,
            },

        ],
    },
]);
