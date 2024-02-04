import Navbar from "../navbar";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="">
      <Navbar />
      <div className="flex items-center justify-center mt-52">
        <div className="max-w-3xl text-center ">
          <h1 className="font-extrabold text-2xl">Sign Up</h1>
          <SignUp />
        </div>
      </div>
    </main>
  );
}
