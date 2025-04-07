import {NavLink, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import FavouriteDetailPage from "./pages/FavoriteDetailPage.jsx";
import FavoriteDetailPage from "./pages/FavoriteDetailPage.jsx";

function App() {
    return (
        <>
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/fav">Favorite</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="fav" element={<FavoritesPage />} />
                <Route path="fav/:id" element={<FavoriteDetailPage />} />
            </Routes>
        </>
    );
}

export default App;