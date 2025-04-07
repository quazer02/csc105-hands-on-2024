import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
import "./index.css";
import App from "./App.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import FavoriteDetailPage from "./pages/FavoriteDetailPage.jsx";
const router = createBrowserRouter([
    {
        path: "/", // Home route
        element: <App />, // Render the App component
        children: [
            {
                path: "/Home",
                element: <HomePage />,
            },
            {
                path: "/fav",
                element: <FavoritesPage />,
            },
            {
                path: "/fav/:id",
                element: <FavoriteDetailPage />,
            },
        ]
    },
    {
        path: "/login",
        element: <LoginPage />,
    },

    {
        path: "/Signup",
        element: <SignUpPage />,
    },

    {
        path: "*",
        element: <NotFoundPage />,
    },

]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} /> {/* Provide the router to the app */}
    </StrictMode>
);