import Navbar from "../navbar";
export default function Page() {
  return (
    <main className="">
      <Navbar />
      <div className="flex items-center justify-center mt-12 px-4 ">
        <div className="text-left max-w-2xl">
          <h1 className="font-extrabold text-4xl text-teal-600 mb-2">About</h1>
          <p>The LGDA is a professional association of Directors of Services, Executive Managers in Dublin City, Heads of Functions and others who are on a common pay scale.</p>
          <h2 className="mt-6 text-lg font-semibold mb-2">The objectives of the LGDA are: </h2>
          <li>To represent the views of the members of the Association</li>
          <li>To promote the professional interests and development of the membership</li>
          <li>
            To co-operate with the County and City Managers Association (CCMA), Government Departments, the Local Government Management Services Board, the Local Government
            Computer Services Board, and other state and semi-state organizations
          </li>
          <li>To provide a framework to facilitate the efficient operation of vocational groups and networks</li>
        </div>
      </div>
    </main>
  );
}
