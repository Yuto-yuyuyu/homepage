import PostPreview from "./post-preview";
import PostMiniPreview from "./post-mini-preview";
import { Post } from "@/interfaces/post";
import { getAllPosts, getPostsByTag } from "@/lib/api";

export default function PostList({tag}: {tag?: string}) {
    const posts = tag ? getPostsByTag(tag) : getAllPosts();
    return (
        <div>
            {posts.length > 0 ? <PostPreview post={posts[0]} /> : <div className="text-center text-lg font-bold">No posts found</div>}

            {posts.slice(1).map((post, index) => (
                <PostMiniPreview post={post} key={index} />
            ))}
        </div>

    );
}