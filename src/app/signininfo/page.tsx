import Navbar from "../navbar";
export default function Page() {
  return (
    <main className="">
      <Navbar />
      <div className="flex items-center justify-center mt-12 px-4 ">
        <div className="text-left max-w-2xl">
          <h1 className="font-extrabold text-4xl text-teal-600 mb-2">Sign Up</h1>
          <p>The members area contains relevant documents, videos, media and calander concerning the LGDA. </p>

          <h2 className="mt-8 font-semibold text-lg">Already a member?</h2>
          <p>Check your email for a link to sign in or sign up. Once signed in, you will have access to the members area.</p>

          <h2 className="mt-8 font-semibold text-lg">Not a member?</h2>
          <p>Contact our Membership Officer to pay the membership fee. Once paid, you will recieve an email allowing you to sign up for the members area.</p>
        </div>
      </div>
    </main>
  );
}
