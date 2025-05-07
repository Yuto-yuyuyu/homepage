import { notFound } from "next/navigation";

import { getPostsByTag, getAllTags } from "@/lib/api";
import TagAll from "@/app/_components/tag-all";
import PostList from "@/app/_components/post-list";
import Caption from "@/app/_components/caption";
import Separator from "@/app/_components/separator";

import { BASE_PATH } from "@/constants/base-path";

type Params = {
    params: Promise<{
        slug: string;
    }>;
}

export default async function Tags(props: Params) {
    const params = await props.params;
    const tag = decodeURIComponent(params.slug).replace(`${BASE_PATH}/`, "");
    console.log(tag);
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

export async function generateStaticParams() {
    const tags = getAllTags();

    return tags.map((tag) => ({
        slug: encodeURIComponent(tag),
    }));
}