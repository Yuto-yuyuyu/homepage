import classnames from "classnames";
import type { Metadata } from "next";
import "./globals.css";

import Header from "./_components/header";
import Footer from "./_components/footer";

import { notoSansJP } from "./fonts";

export const metadata: Metadata = {
  title: "タイトル未定",
  description: "タイトル未定なブログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={classnames(
          notoSansJP.variable,
          notoSansJP.className,
          "bg-[#f9f9f9] antialiased max-w-6xl mx-auto min-h-screen flex flex-col",
        )
        }
      >
        <Header />
        <div className="mx-4 md:mx-8 flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
