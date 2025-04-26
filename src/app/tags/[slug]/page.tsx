import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPostBySlug, getPostsByTag } from "@/lib/api";
import TagAll from "@/app/_components/tag-all";
import PostList from "@/app/_components/post-list";
import Caption from "@/app/_components/caption";
import Separator from "@/app/_components/separator";

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
            <Separator />
            <Caption contents={"タグ「"+tag+"」の記事一覧"} />
            <PostList tag={tag} flag={true} />
        </main>
    );
}