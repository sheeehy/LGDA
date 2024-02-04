import Navbar from "../navbar";

export default function Page() {
  return (
    <main className="">
      <Navbar />
      <div className="flex items-center justify-center mt-52">
        <div className="max-w-3xl text-center ">
          <h1 className="font-extrabold text-2xl">Sign in info</h1>

          <h2>Already a member?</h2>
          <p>Check your email for a link to sign in.</p>

          <h2>Not a member?</h2>
          <p>Contact X to pay the membership fee and get a login.</p>
        </div>
      </div>
    </main>
  );
}
