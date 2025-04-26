import TagAll from "@/app/_components/tag-all";
import PostList from "@/app/_components/post-list";
import Caption from "@/app/_components/caption";
import Separator from "@/app/_components/separator";


export default function Tags(){
    return(
        <main>
            <TagAll pickedTag="記事一覧" />
            <Separator />
            <Caption contents="全ての記事一覧" />
            <PostList flag={true} />
        </main>
    )
}