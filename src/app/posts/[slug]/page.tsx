import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHTML from "@/lib/markdownToHTML";
import TagAll from "@/app/_components/tag-all";
import PostList from "@/app/_components/post-list";
import Separator from "@/app/_components/separator";
import Caption from "@/app/_components/caption";
import PostHeader from "@/app/_components/post-header";
import PostBody from "@/app/_components/post-body";


type Params = {
    params: Promise<{
        slug: string;
    }>;
}


export default async function Post(props: Params) {
    const params = await props.params;
    const post = getPostBySlug(decodeURIComponent(params.slug));
    if (!post) {
        notFound();
    }

    const content = await markdownToHTML(post.content || "");

    return (
        <main>
            <div className="hidden md:block">
                <TagAll />
                <Separator />
            </div>
            
            <article className="">
                <PostHeader
                    slug={post.slug}
                    title={post.title}
                    date={post.date}
                    image={post.image}
                    tags={post.tags}
                />
                <Separator />
                <PostBody content={content} />
            </article>
            <Separator />
            <Caption contents={"タグ「"+post.tags[0]+"」の関連記事"} tag={post.tags[0]} />
            <PostList tag={post.tags[0]} />
        </main>
    );
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: encodeURIComponent(post.slug),
    }));
}