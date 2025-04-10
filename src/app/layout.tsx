import classnames from "classnames";
import type { Metadata } from "next";
import "./globals.css";

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
        )
        }
      >
        {children}
      </body>
    </html>
  );
}
