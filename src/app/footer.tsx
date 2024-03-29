import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center py-4 bg-transparent px-4 mt-2 my-2">
      {/* Links */}
      <div className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-4 py-2 px-4 font-semibold text-zinc-700">
        <div className="py-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 ">
          <Link href="/about" className="hover:text-zinc-600 transition ease-in-out">
            About
          </Link>
          <Link href="/contact" className="hover:text-zinc-600 transition ease-in-out">
            Contact
          </Link>
          <Link href="/accesibility" className="hover:text-zinc-600 transition-colors duration-300 ease-in-out">
            Accessibility Statement
          </Link>
          <Link href="/privacy" className="hover:text-zinc-600 transition-colors duration-300 ease-in-out">
            Privacy Statement
          </Link>
          <Link href="/signininfo" className="hover:text-zinc-600 transition-colors duration-300 ease-in-out">
            Sign Up
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
