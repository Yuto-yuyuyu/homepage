import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function Caption({contents, tag} : { contents: string, tag?: string }) {
    const linkaddress = tag== "全ての記事" ? "/tags" : `/tags/${tag}`;
    return (
        <div className="flex items-baseline">
            <div className="text-xl text-sub1 font-bold">
                {contents}
            </div>
            {tag && (
                <Link href={linkaddress} className="text-sm text-sub2 ml-4 hover:text-hov">
                    <span className="flex items-center">
                        もっと見る
                        <IoIosArrowForward />
                    </span>
                </Link>
            )}
        </div>
    )
}