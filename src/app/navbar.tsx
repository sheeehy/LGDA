import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-transparent px-4 mt-2 my-2">
      {/* Logo */}
      <div className="hidden sm:block">
        <Link href="/">
          <Image src="/update.png" alt="LGDA Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Links */}
      <div className="flex justify-center space-x-4 py-2 px-4 font-semibold  text-zinc-800">
        <div className="py-2 space-x-4">
          <Link href="/" className="hover:text-teal-600 transition-colors duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/about" className="hover:text-teal-600 transition-colors duration-300 ease-in-out">
            About
          </Link>
          <Link href="/contact" className="hover:text-teal-600 transition-colors duration-300 ease-in-out">
            Contact
          </Link>
          <SignedIn>
            <Link href="/members" className="hover:text-teal-600 transition-colors duration-300 ease-in-out">
              Members
            </Link>
          </SignedIn>
        </div>

        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href="/signininfo" className="font-semibold bg-teal-600 text-white px-4 py-2 rounded-full hover:opacity-80 transition ease-in-out text-nowrap">
            Sign in
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
