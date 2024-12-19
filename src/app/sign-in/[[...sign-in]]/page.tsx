import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main>
      <div className="flex justify-center items-center flex-col mt-12">
        <SignIn appearance={{ elements: { footerAction__signIn: { display: "none" } } }} />
      </div>
    </main>
  );
}
