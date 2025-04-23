import TagAll from "@/app/_components/tag-all";
import PostList from "@/app/_components/post-list";

export default function Tags(){
    return(
        <main>
            <TagAll pickedTag="記事一覧" />
            <div className="text-lg text-sub1 font-bold mt-3">
                全ての記事一覧
            </div>
            <PostList flag={true} />
        </main>
    )
}