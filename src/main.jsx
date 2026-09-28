import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import AuthProvider from "./Context/AuthProvider.jsx";
import "./index.css";
import { router } from "./Router/router.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
             <ToastContainer />
        </AuthProvider>
    </StrictMode>,
);
