import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHTML from "@/lib/markdownToHTML";
import TagAll from "@/app/_components/tag-all";
import PostList from "@/app/_components/post-list";
import Separator from "@/app/_components/separator";
import Caption from "@/app/_components/caption";
import PostHeader from "@/app/_components/post-header";
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github.css';

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
            <PostHeader
                slug={post.slug}
                title={post.title}
                date={post.date}
                image={post.image}
                excerpt={post.excerpt}
                tags={post.tags}
            />
            <Separator />
            <article className="">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
            <Separator />
            <Caption contents={"タグ「"+post.tags[0]+"」の関連記事"} tag={post.tags[0]} />
            <PostList tag={post.tags[0]} />
        </main>
    );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    return{
        title: post.title,
        description: post.excerpt,

    }
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}