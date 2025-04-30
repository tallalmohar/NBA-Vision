import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: "NBA Vision",
  description: "Grade your Fantasy Team, improve it giving you statistical advantage.",
  icons: "//www.nba.com/favicon.ico",
};

export default function RootLayout({children,}: { children: React.ReactNode; }) {

  return (
    <html lang="en">
    <body className={`${oswald.variable} font-sans`}>
    <Navbar />
      {children}
      </body>
    </html>
  );
}
