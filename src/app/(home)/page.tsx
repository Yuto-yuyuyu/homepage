import TagAll from "@/app/_components/tag-all";
import PostList from "@/app/_components/post-list";
import Caption from "@/app/_components/caption";
import Separator from "@/app/_components/separator";

export default function Home() {

  return (
    <main>
      <TagAll />
      <Separator />
      <Caption contents={"最近の投稿"} tag="全ての記事" />
      <PostList />
      <Separator />
    </main>
  );
}
