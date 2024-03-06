import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center py-4 bg-transparent px-4 mt-2 my-2 text-nowrap">
      {/* Links */}
      <div className="flex justify-center space-x-4 py-2 px-4 font-semibold text-zinc-700 text-nowrap">
        <div className="py-2 space-x-8 ">
          <Link href="/accesibility" className="hover:text-zinc-600 transition-colors duration-300 ease-in-out text-nowrap mt-2">
            Accesibility Statement
          </Link>
          <Link href="/privacy" className="hover:text-zinc-600 transition-colors duration-300 ease-in-out text-nowrap mt-2">
            Privacy Statement
          </Link>
          <Link href="/signininfo" className="hover:text-zinc-600 transition-colors duration-300 ease-in-out text-nowrap mt-2">
            Sign Up
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
