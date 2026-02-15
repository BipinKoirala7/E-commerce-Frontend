import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Belleza } from "next/font/google";
import { Style_Script } from "next/font/google";

import "./globals.css";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const belleza = Belleza({
  weight: "400",
  variable: "--font-belleza",
  subsets: ["latin"],
});

const styleScript = Style_Script({
  weight: "400",
  variable: "--font-logo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Shop What you like",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${nunito.variable} ${belleza.variable} ${styleScript.variable} antialiased`}
      >
        <div className="flex flex-col w-full h-full text-text">
          <MainNav />
          <div className="grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
