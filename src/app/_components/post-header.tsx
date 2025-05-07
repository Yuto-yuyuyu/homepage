import Image from "next/image";

import TagList from "./tag-list";
import { CiCalendar } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";

type Props = {
    slug: string;
    title: string;
    date: string;
    image: string;
    tags: string[];
};

export default function PostHeader({slug, title, date, image, tags }: Props) {
    const imagePath = image ? `/_posts/${slug}/${image}` : "/noimage.jpg";
    const imageUrl = image ? imagePath : "/noimage.jpg";
    return (
        <div>
            <div className="relative w-full aspect-[16/9] md:aspect-[22/7] bg-main">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    unoptimized
                />
            </div>
            <div className="text-3xl text-main font-bold mt-4">{title}</div>
            <div className="flex items-center gap-1 mt-2">
                <CiCalendar className="text-sub2 text-xl" />
                <div className="text-sub2 ">{date}</div>
            </div>
            <div className="flex items-center gap-1 mt-2">
                <IoPricetagsOutline className="text-sub2 text-xl" />
                <TagList tags={tags} />
            </div>
        </div>
    );
}