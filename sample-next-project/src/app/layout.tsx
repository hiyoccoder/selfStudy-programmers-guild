import type { Metadata } from "next";
import { Akshar } from "next/font/google";
import "./globals.css";

// Google Fontsの指定
// https://fonts.google.com/specimen/Anek+Gujarati
const akshar = Akshar({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "プロフィール",
  description: "プロフィールページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={akshar.className}>{children}</body>
    </html>
  );
}
