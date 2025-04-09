import PostPreview from "./post-preview";
import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";

export default function PostList() {
    const posts = getAllPosts();

    return (
        <div className="mx-8">
            
        </div>
    );
}