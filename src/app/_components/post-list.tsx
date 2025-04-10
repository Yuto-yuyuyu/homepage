import PostPreview from "./post-preview";
import { Post } from "@/interfaces/post";
import { getAllPosts, getPostsByTag } from "@/lib/api";

export default function PostList({tag} : {tag?: string}) {
    const posts = tag ? getPostsByTag(tag) : getAllPosts();
    const postList = posts.slice(0, 5);
    return (
        <div className=""> {/**あとで */}
            {postList.map((post: Post) => (
                <div key={post.slug} className="w-48">
                    <PostPreview post={post} />
                </div>
            ))}
        </div>
    );
}