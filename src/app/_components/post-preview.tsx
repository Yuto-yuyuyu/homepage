import Image from "next/image";
import Link from "next/link";
import { Post } from "@/interfaces/post";
import TagList from "./tag-list";
import { CiCalendar } from "react-icons/ci";
import { BsTagsFill } from "react-icons/bs";

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
        <div className="shadow-md rounded-xl bg-white">
            <Link href={`/posts/${post.slug}`}>
                <div className="">
                    <div className="aspect-video relative bg-main rounded-t-xl overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={altText}
                            fill
                            className="object-contain"
                        />
                    </div>
                    
                    <div className="px-4 py-2">
                        <div className="h-14 text-xl font-bold text-main hover:text-hov">{post.title}</div>
                        <div className="flex items-center gap-1">
                            <CiCalendar className="text-sub2 text-lg" />
                            <div className="text-sm text-sub2">{formattedDate}</div>
                        </div>
                    </div>
                    
                </div>
            </Link>
            <div className="mx-4 flex items-center gap-1">
                <BsTagsFill className="text-sub3 text-lg" />
                <TagList tags={post.tags} />
            </div>
        </div>
    )
}

