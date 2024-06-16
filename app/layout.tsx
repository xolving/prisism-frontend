import type { Metadata } from "next";
import localFont from 'next/font/local';
import Header from "./components/Header";
import Notice from "./components/Notice";
import "./globals.css";

const inter = localFont({ 
  src: '../public/fonts/PretendardVariable.woff2'
});

export const metadata: Metadata = {
  title: "언더라이브",
  description: "언더라이브 랜덤채팅",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notice />
        <Header />
        {children}
      </body>
    </html>
  );
}
