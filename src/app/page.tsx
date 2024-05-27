import Navbar from "./navbar";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="flex items-center justify-center  ">
        <div className="max-w-xl text-left px-4 mb-12 ">
          <h1 className="font-extrabold text-5xl mb-4 mt-16 sm:mt-0 bg-clip-text text-transparent bg-gradient-to-t from-teal-700 to-teal-600 ml-2 ">
            Local Government Directors Association
          </h1>
          <p className="text-zinc-800 text-lg  ml-2">
            The LGDA is a professional association of Directors of Services, Executive Managers in Dublin City, Heads of Functions and others to whom functions are delegated by a
            City or County Chief Executive.
          </p>
          <div className="flex mt-4">
            <p className="ml-2 text-lg">
              Liam Bergin, <br></br>Chair{" "}
            </p>
            <Image src="/LiamNew.png" alt="Liam Bergin Signature" width={60} height={60} className="ml-4" />
          </div>
          <div className="ml-2">
            <SignedOut>
              <Link href="/about" className="bg-teal-600 text-white px-5 py-3 rounded-full inline-flex items-center font-semibold hover:opacity-80 transition ease-in-out mt-6">
                Learn More
              </Link>
            </SignedOut>

            <SignedIn>
              <Link href="/members" className="bg-teal-600 text-white px-5 py-3 rounded-full inline-flex items-center font-semibold hover:opacity-80 transition ease-in-out mt-6">
                Members Area
              </Link>
            </SignedIn>
          </div>
        </div>
        <div className="select-none pointer-events-none">
          <Image src="/mockup1.png" alt="LGDA Mockup" width={530} height={320} className=" hidden lg:block " />
        </div>
      </div>
    </main>
  );
}
