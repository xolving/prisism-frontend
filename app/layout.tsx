import type { Metadata } from "next";
import localFont from 'next/font/local';
import GoogleAdsense from "./components/GoogleAdsense";
import Header from "./components/Header";
import "./globals.css";

const inter = localFont({ 
  src: '../public/fonts/PretendardVariable.woff2'
});

export const metadata: Metadata = {
  title: "프리시즘 랜덤채팅",
  description: "프리시즘 일대일 랜덤채팅",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
      <GoogleAdsense />
    </html>
  );
}
