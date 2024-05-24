import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin_Sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramos",
  description: "Ramos your go to app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefin_Sans.className}>{children}</body>
    </html>
  );
}
