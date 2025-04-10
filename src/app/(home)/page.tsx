import Image from "next/image";
import Link from "next/link";
import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";

import Header from "@/app/_components/header";
import About from "../_components/about";
import PostList from "../_components/post-list";

export default function Home() {

  return (
    <main>
      <Header />
      <div className="">
        <About />
        <PostList />
      </div>
    </main>
  );
}
