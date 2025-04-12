import Image from "next/image";
import Link from "next/link";
import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";

import About from "@/app/_components/about";
import TagAll from "@/app/_components/tag-all";
import PostList from "@/app/_components/post-list";

export default function Home() {

  return (
    <main>
      <div className="">
        {/* <About /> */}
        <TagAll />
        <PostList />
      </div>
    </main>
  );
}
