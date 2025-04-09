import Image from "next/image";
import Link from "next/link";
import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";

import Header from "@/app/_components/header";
import About from "../_components/about";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <Header />
      <div className="mx-8">
        <About />
        <div>
          {posts.map((post: Post) => (
            <div key={post.slug} >
              <Link href={`/posts/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
