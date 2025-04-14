import Link from "next/link";

import { BiSolidGame } from "react-icons/bi";
import { MdOutlineArticle } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";

export default function Footer() {
    return (
        <footer className="bg-main ">
            <div className="mx-4 md:mx-8 pb-6 pt-7">
                <Link href = "/" className="flex gap-2 justify-center md:justify-start pb-4">
                    <BiSolidGame className="text-4xl text-white" />
                    <div className="font-nicomoji text-4xl text-white">タイトル未定</div>
                </Link>

                <div className="flex gap-4 justify-center">
                    <Link href={"/tags"}  className="flex gap-2 flex-col items-center">
                        <MdOutlineArticle className="text-white text-2xl" />
                        <div className="text-white text-sm">記事一覧</div>
                    </Link>

                    <Link href={"https://github.com/Yuto-yuyuyu"} target="_blank" className="flex gap-2 flex-col items-center">
                        <FiGithub className="text-white text-2xl" />
                        <div className="text-sm text-white">GitHub</div>
                    </Link>

                    <Link href={"https://atcoder.jp/users/m0w0mY"} target="_blank" className="flex gap-2 flex-col items-center">
                        <LuTrophy className="text-white text-2xl" />
                        <div className="text-sm text-white">AtCoder</div>
                    </Link>

                </div>
            </div>
        </footer>
    );
}