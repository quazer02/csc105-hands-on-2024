import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <Link to="/">Go back to the Home Page</Link>
        </div>
    );
};

export default NotFoundPage;