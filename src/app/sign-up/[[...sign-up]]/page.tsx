import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main>
      <div className="flex justify-center items-center flex-col">
        <SignUp />
      </div>
    </main>
  );
}
