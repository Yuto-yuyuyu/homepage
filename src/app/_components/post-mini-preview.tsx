import Image from "next/image";
import Link from "next/link";
import { Post } from "@/interfaces/post";
import { CiCalendar } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";

export default function PostMiniPreview({ post }: { post: Post }) {
    const imagePath = post.image ? `/_posts/${post.slug}/${post.image}` : "/noimage.jpg";
    const imageUrl = imagePath;
    const altText = post.image ? post.title : "no image";
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    return (
        <div className="shadow-md rounded-xl bg-white my-4">
            <Link href={`/posts/${post.slug}`}>
                <div className="flex items-center gap-2 ">
                    <div className="aspect-video relative w-[40%] bg-main rounded-l-xl overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={altText}
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                    
                    <div className="px-4 py-2 w-[60%] gap-2 flex flex-col justify-between">
                        <div className="text-lg font-bold text-main hover:text-hov overflow-hidden text-clip whitespace-nowrap">
                            {post.title}
                        </div>
                        <div className="flex  gap-1 justify-between flex-col sm:flex-row">
                            <div className="flex items-center gap-1">
                                <CiCalendar className="text-sub2 text-lg" />
                                <div className="text-sm text-sub2">{formattedDate}</div>
                            </div>
                            <div className="items-center gap-1 flex">
                                <IoPricetagOutline className="text-sub2 text-lg" />
                                <div className="text-sm text-sub2 whitespace-nowrap">{post.tags[0]}</div>
                                <div className=" text-sm text-sub2 hidden md:block ">
                                    {post.tags.map((tag, index) => (
                                        index > 0 ? `,  ${tag}` : null
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}