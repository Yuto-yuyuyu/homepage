import Link from "next/link";

export default function Header() {
    return(
        <header>
            <div className="items-center justify-between p-4 bg-main text-white">
                <Link href = "/">
                    <div className="font-nicomoji text-2xl text-center md:text-3xl md:text-left">いつかやるかもしれないブログ</div>
                </Link>
            </div>
        </header>
    );
};