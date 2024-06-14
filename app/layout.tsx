import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const inter = localFont({ 
  src: '../public/fonts/PretendardVariable.woff2'
});

export const metadata: Metadata = {
  title: "Underlive",
  description: "1:1 랜덤채팅 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
