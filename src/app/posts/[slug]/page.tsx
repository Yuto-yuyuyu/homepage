import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHTML from "@/lib/markdownToHTML";
import PostList from "@/app/_components/post-list";
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
            <article>
                <h1>{post.title}</h1>
                <p>{post.date}</p>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
            <PostList tag={post.tags[0]} numPosts={3} />
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