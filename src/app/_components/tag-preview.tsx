import Link from "next/link";


export default function TagPreview({tag}: {tag: string}){
    return (
        <div>
            <Link href={`/tags/${tag}`}>
                <div>{tag}</div>
            </Link>
        </div>
    );
}