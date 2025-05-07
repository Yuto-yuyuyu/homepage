import PostPreview from "./post-preview";
import PostMiniPreview from "./post-mini-preview";
import { getAllPosts, getPostsByTag } from "@/lib/api";

export default function PostList({tag, flag}: {tag?: string, flag?: boolean}) {
    // flag=trueならtagが一致するすべての記事を表示
    // flag=falseならtagが一致する記事をいくつか表示
    let posts = tag ? getPostsByTag(tag) : getAllPosts();
    posts = flag ? posts : posts.slice(0, 3);
    return (
        <div>
            <div className="md:grid grid-cols-3 gap-4 hidden">
                {posts.map((post, index) => (
                    <PostPreview post={post} key={index} />
                ))}
            </div>

            <div className="md:hidden">
                {posts.map((post, index) => (
                    <PostMiniPreview post={post} key={index} />
                ))}
            </div>
        </div>

    );
}