import { useParams, useSearchParams } from "react-router-dom";

const FavouriteDetailPage = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "unknown";
    const size = searchParams.get("size") || "unknown";

    return (
        <div>
            <h1>Your favourite post is {query}. Post ID is {id}. Size is {size}.</h1>
        </div>
    );
};

export default FavouriteDetailPage;
