import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


export const metadata: Metadata = {
  title: "NBA Vision",
  description: "Grade your Fantasy Team, improve it giving you statistical advantage.",
  icons: "//www.nba.com/favicon.ico",
};

export default function RootLayout({children,}: { children: React.ReactNode; }) {

  return (
      <html lang="en">
      <body className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      </body>
      </html>
  );
}
