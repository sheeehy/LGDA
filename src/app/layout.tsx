import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
<<<<<<< HEAD
import Footer from "./footer";
=======
import Navbar from "./navbar";
>>>>>>> 3d45c73b348c8e0b64496aab90cc0782bd4a3de7

const poppins = Poppins({
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
      <html lang="en" className="flex-col">
        <body className={poppins.className}>{children}</body>
        <Footer />
      </html>
    </ClerkProvider>
  );
}
