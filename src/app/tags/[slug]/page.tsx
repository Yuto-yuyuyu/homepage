import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPostBySlug, getPostsByTag } from "@/lib/api";
import TagAll from "@/app/_components/tag-all";
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
            <TagAll pickedTag={tag} />
            <div className="text-lg text-sub1 font-bold mt-3">
                タグ「{tag}」の記事一覧
            </div>
            <PostList tag={tag} flag={true} />
        </main>
    );
}