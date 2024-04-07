import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import Footer from "./footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

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
        <head></head>
        <body className="flex flex-col min-h-screen">
          <div className="flex-grow">{children}</div>

          <div className="w-full">
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
