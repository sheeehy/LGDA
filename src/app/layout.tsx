import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Footer from "./footer";
import Navbar from "./navbar";

// Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "LGDA",
  description: "LGDA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        {/* Add Google Fonts link for Afacad Flux */}
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux&display=swap" rel="stylesheet" />
        </head>
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <div className="flex-grow">
            {" "}
            <Navbar />
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
