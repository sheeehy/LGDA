import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center py-0 bg-transparent px-4 mt-2 my-0">
      {/* Links */}
      <div className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-4 py-2 px-4 font-semibold text-zinc-700">
        <div className="py-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 ">
          <Link href="/about" className="hover:text-zinc-400 transition ease-in-out">
            About
          </Link>
          <Link href="/contact" className="hover:text-zinc-400 transition ease-in-out">
            Contact
          </Link>
          <Link href="/accesibility" className="hover:text-zinc-400 transition-colors duration-300 ease-in-out">
            Accessibility Statement
          </Link>
          <Link href="/privacy" className="hover:text-zinc-400 transition-colors duration-300 ease-in-out">
            Privacy Statement
          </Link>
          <Link href="/signininfo" className="hover:text-zinc-400 transition-colors duration-300 ease-in-out">
            Sign Up
          </Link>
          <a href="https://remise.ie" className="hover:text-zinc-400 transition-colors duration-300 ease-in-out">
            Site Credits
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
