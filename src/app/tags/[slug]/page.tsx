import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPostBySlug, getPostsByTag } from "@/lib/api";
import PostList from "@/app/_components/post-list";

type Params = {
    params: Promise<{
        slug: string;
    }>;
}

export default async function Tags(props: Params) {
    const params = await props.params;
    const tag = decodeURIComponent(params.slug);
    const posts = getPostsByTag(tag);

    if (!posts) {
        notFound();
    }

    return (
        <main>
            <h1>{tag}</h1>
            <PostList tag={tag} />
        </main>
    );
}