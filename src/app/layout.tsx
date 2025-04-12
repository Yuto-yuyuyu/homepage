import classnames from "classnames";
import type { Metadata } from "next";
import "./globals.css";

import Header from "./_components/header";
import Footer from "./_components/footer";

import { notoSansJP } from "./fonts";

export const metadata: Metadata = {
  title: "いつかやるかもしれない",
  description: "そのうちできるかもしれないブログ",
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
          "bg-[#ffffff] antialiased max-w-6xl mx-auto"
        )
        }
      >
        <Header />
        <div className="mx-4 md:mx-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
