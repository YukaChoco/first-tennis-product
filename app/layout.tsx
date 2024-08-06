import type { Metadata } from "next";
import "./globals.css";
import { Mochiy_Pop_One } from "next/font/google";

const mochiyPopOne = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={mochiyPopOne.className}>{children}</body>
    </html>
  );
}
