import Link from "next/link";

import { BiSolidGame } from "react-icons/bi";

export default function Header() {
    return(
        <header>
            <div className="h-24 items-center flex mx-4 md:mx-8">
                <Link href = "/" className="flex gap-2">
                    <BiSolidGame className="text-5xl" />
                    <div className="font-nicomoji text-5xl">タイトル未定</div>
                </Link>
            </div>
        </header>
    );
};