import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FavouritesPage = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState(1);
    const [query, setQuery] = useState("love");
    const [size, setSize] = useState("small");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (number < 1 || number > 100) {
            alert("Please enter a number between 1 and 100.");
            return;
        }
        navigate(`/fav/${number}?q=${query}&size=${size}`);
    };

    return (
        <div>
            <h1>This is the Favourites Page.</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Number (1-100):
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        min="1"
                        max="100"
                        required
                    />
                </label>
                <br />
                <label>
                    Query:
                    <select value={query} onChange={(e) => setQuery(e.target.value)}>
                        <option value="love">Love</option>
                        <option value="like">Like</option>
                    </select>
                </label>
                <br />
                <label>
                    Size:
                    <select value={size} onChange={(e) => setSize(e.target.value)}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FavouritesPage;
