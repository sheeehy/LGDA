export default function Page() {
  return (
    <main className="">
      <div className="flex items-center justify-center mt-12 px-4 ">
        <div className="text-left  text-xl">
          <h1 className="font-extrabold text-4xl text-teal-600 mb-2">About</h1>
          <p className="max-w-2xl">
            The <span className="font-semibold">LGDA</span> is a professional association of Directors of Services, Executive Managers in Dublin City, Heads of Functions and others
            who are on a common pay scale.
          </p>
          <h2 className="mt-6  font-semibold mb-2">The objectives of the LGDA are: </h2>

          <div className="max-w-3xl space-y-2">
            <ul>• To represent the views of the members of the Association</ul>
            <ul>• To promote the professional interests and development of the membership</ul>
            <ul>
              • To co-operate with the County and City Managers Association (CCMA), Government Departments, the Local Government Management Services Board, the Local Government
              Computer Services Board, and other state and semi-state organizations
            </ul>
            <ul>• To provide a framework to facilitate the efficient operation of vocational groups and networks</ul>
          </div>

          <div>
            <h1 className="mt-6 font-semibold mb-2">Board of Directors</h1>
            <h2>• Liam Bergin, Chair</h2>
            <h2>• Donal Brennan, Vice Chair (LGDS)</h2>
            <h2>• Liam Ward, Vice Chair (LGDA)</h2>
            <h2>• Michael Nicholson, Membership Officer</h2>
            <h2>• Anne Devine, Treasurer</h2>
            <h2>• Joanne Grehan</h2>
            <h2>• Paddy Connaughton</h2>
            <h2>• Louis Duffy</h2>
            <h2>• David Joyce</h2>
            <h2>• Caitlin Conneely</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
