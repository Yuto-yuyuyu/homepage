import Image from "next/image";
import Link from "next/link";
import { Post } from "@/interfaces/post";

export default function PostPreview({ post }: { post: Post }) {
    const imageUrl = post.image ? post.image : "/noimage.jpg";
    const altText = post.image ? post.title : "no image";
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    return (
        <div>
            <Link href={`/posts/${post.slug}`}>
                <div className="flex flex-col  justify-center w-48">
                    <Image
                        src={imageUrl}
                        alt={altText}
                        width={192}
                        height={108}
                        className=""
                    />

                    <div className="text-lg font-bold">{post.title}</div>
                    <div className="text-sm text-gray-500">{formattedDate}</div>
                </div>
            </Link>
        </div>
    )
}

