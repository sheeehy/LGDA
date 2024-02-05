import { SignUp } from "@clerk/nextjs";
import Navbar from "@/app/navbar";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <SignUp />
      </div>
    </main>
  );
}
