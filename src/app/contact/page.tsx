export default function Page() {
  return (
    <main className="">
      <div className="flex items-center justify-center mt-12 px-4 ">
        <div className="text-left max-w-2xl">
          <h1 className="font-extrabold text-4xl text-teal-600 mb-2">Contact</h1>
          <div className="text-xl">
            <h2>
              Liam Bergin, LGDA Chair:{" "}
              <a className="text-teal-600" href="mailto:liam.bergin@dublincity.ie">
                liam.bergin@dublincity.ie
              </a>
            </h2>
            <h2 className="mt-4">
              Technical Inquiries:{" "}
              <a className="text-teal-600" href="mailto:lgdaservices@hotmail.com">
                lgdaservices@hotmail.com
              </a>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
