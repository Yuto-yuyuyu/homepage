import Link from "next/link";


export default function TagPreview({tag}: {tag: string}){
    return (
        <div className="">
            <Link href={`/tags/${tag}`} className="px-4 h-8 m-1.5 flex items-center border rounded-full border-[#e5e5e5] bg-white">
                <div className="text-sub3 hover:text-hov whitespace-nowrap">{tag}</div>
            </Link>
        </div>
    );
}