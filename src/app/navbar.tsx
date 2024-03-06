import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-4 bg-transparent px-4 mt-2 my-2 relative mb-6">
      {/* Logo - Centered on larger screens, left on smaller screens */}
      <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 flex sm:block">
        <Link href="/">
          <div className="cursor-pointer">
            <Image src="/update.png" alt="LGDA Logo" width={120} height={120} className="hover:opacity-85 transition ease-in-out" />
          </div>
        </Link>
      </div>

      {/* Placeholder to maintain space for the centered logo on smaller screens */}
      <div className="block sm:hidden flex-grow"></div>

      {/* Links - Always on the right */}
      <div className="flex items-center justify-end flex-grow">
        <div className="space-x-8 py-2 px-4 font-semibold text-zinc-800">
          <Link href="/about" className="hover:opacity-75 transition ease-in-out">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-75 transition ease-in-out">
            Contact
          </Link>
          <SignedIn>
            <Link href="/members" className="hover:opacity-75 transition ease-in-out">
              Members
            </Link>
          </SignedIn>
        </div>

        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="font-semibold bg-teal-600 text-white px-4 py-2 rounded-full hover:opacity-80 transition ease-in-out text-nowrap">
            Sign in
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
