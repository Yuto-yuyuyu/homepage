import Link from "next/link";


export default function TagPreview({tag ,flag}: {tag?: string, flag?: boolean}) {
    const content = tag ? tag : "全ての記事";
    const linkaddress = tag ? `/tags/${encodeURIComponent(tag)}` : "/tags";
    return (
        <div className="">
            <Link href={linkaddress} className={`px-4 h-8 m-1.5 flex items-center border rounded-full border-[#e5e5e5] ${flag ? "bg-sub3" : "bg-white"}`}>
                <div className={ `hover:text-hov whitespace-nowrap ${flag ? "text-white" : "text-sub3"}`}>{content}</div>   
            </Link>
        </div>
    );
}