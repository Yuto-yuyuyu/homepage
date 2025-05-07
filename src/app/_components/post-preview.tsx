import Image from "next/image";
import Link from "next/link";
import { Post } from "@/interfaces/post";
import TagList from "./tag-list";
import { CiCalendar } from "react-icons/ci";

export default function PostPreview({ post }: { post: Post }) {
    const imagePath = post.image ? `/_posts/${post.slug}/${post.image}` : "/noimage.jpg";
    const imageUrl = post.image ? imagePath : "/noimage.jpg";
    const altText = post.title
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    return (
        <div className="shadow-md rounded-xl bg-white my-4">
            <Link href={`/posts/${post.slug}`}>
                <div className="">
                    <div className="aspect-video relative bg-main rounded-t-xl overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={altText}
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>

                    <div className="px-4 py-2">
                        <div className="pb-2 text-lg font-bold text-main hover:text-hov overflow-hidden text-clip ">
                            {post.title}
                        </div>
                        <div className="flex items-center gap-1">
                            <CiCalendar className="text-sub2 text-lg" />
                            <div className="text-sm text-sub2">{formattedDate}</div>
                        </div>
                    </div>

                </div>
            </Link>
            <div className="mx-4">
                <TagList tags={post.tags} />
            </div>
        </div>
    )
}

