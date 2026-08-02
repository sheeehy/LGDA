import Navbar from "./navbar";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex items-center justify-center">
        <div className="max-w-xl text-left px-4 mb-12">
          <h1 className="font-extrabold text-5xl mb-4 mt-16 sm:mt-0 bg-clip-text text-transparent bg-gradient-to-t from-teal-700 to-teal-600 ml-2">
            Local Government Directors Association
          </h1>
          <p className="text-zinc-800 text-lg ml-2">
            The LGDA is a professional association of Directors of Services, Executive Managers in Dublin City, Heads of Functions and others who are on a common pay scale.
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

      <div className="px-4 pb-16 max-w-3xl mx-auto">
        <h2 className="font-semibold text-xl mb-2">The objectives of the LGDA are:</h2>
        <ul className="space-y-2 text-zinc-800">
          <li>• To represent the views of the members of the Association</li>
          <li>• To promote the professional interests and development of the membership</li>
          <li>
            • To co-operate with the County and City Managers Association (CCMA), Government Departments, the Local Government Management Agency and other state and semi-state
            organizations
          </li>
          <li>• To provide a framework to facilitate the efficient operation of vocational groups and networks</li>
        </ul>

        <h2 className="mt-8 font-semibold text-xl mb-2">Board of Directors</h2>
        <ul className="space-y-1 text-zinc-800">
          <li>• Liam Bergin, Chair</li>
          <li>• Donal Brennan, Vice Chair (LGDS)</li>
          <li>• David Joyce, Vice Chair (LGDA)</li>
          <li>• Michael Nicholson, Membership Officer</li>
          <li>• Anne Devine, Treasurer</li>
          <li>• Joanne Grehan</li>
          <li>• Paddy Connaughton</li>
          <li>• Carmel Kirby</li>
          <li>• Nicola Radley</li>
        </ul>
      </div>
    </main>
  );
}
