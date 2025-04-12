import Link from "next/link";

export default function Header() {
    return(
        <header>
            <div className="items-center justify-between">
                <Link href = "/">
                    <div className="font-nicomoji text-3xl ">ソコソコ成果</div>
                </Link>
            </div>
        </header>
    );
};