import PostPreview from "./post-preview";
import { Post } from "@/interfaces/post";
import { getAllPosts, getPostsByTag } from "@/lib/api";

export default function PostList({tag , numPosts}: {tag?: string, numPosts?: number}) {
    const posts = tag ? getPostsByTag(tag) : getAllPosts();
    const postList = numPosts ? posts.slice(0, numPosts) : posts;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {postList.map((post: Post, index) => (
                <PostPreview post={post} key={index} />
            ))}
        </div>
    );
}