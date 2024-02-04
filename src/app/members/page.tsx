import Navbar from "../navbar";
export default function Page() {
  return (
    <main className="">
      <Navbar />
      <div className="flex items-center justify-center mt-12 px-4 ">
        <div className="text-center max-w-2xl">
          <h1 className="font-extrabold text-4xl text-teal-600 mb-2">Members Area</h1>
          <h2 className="font-semibold text-xl">LGDA Calender</h2>
        </div>
      </div>
    </main>
  );
}
