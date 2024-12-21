import PostListItem from "./PostListItem"
import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const fetchPosts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
    return res.data;
}

const PostList = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ["repoData"],
        queryFn: () => fetchPosts(),
    })

    return (
        <div className="flex flex-col gap-12 mb-8"> 
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </div>
    )
}

export default PostList