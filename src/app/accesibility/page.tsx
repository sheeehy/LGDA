export default function Page() {
  return (
    <main className="">
      <div className="flex items-center justify-center mt-12 px-4 ">
        <div className="text-left  text-xl">
          <h1 className="font-extrabold text-4xl text-teal-600 mb-2"> Accessibility statement</h1>
          <p className="max-w-2xl">
            The Local Government Directors Association (LGDA) is committed to making its website accessible, in accordance with European Union (Accessibility of Websites and Mobile
            Applications of Public Sector Bodies) Regulations 2020.
            <br /> <br />
            This website is partially compliant with the WCAG 2.1 level AA standard. Partially compliant means that some parts of the content do not fully conform to the
            accessibility standard. The non-accessible content items include PDFs.
            <br />
            <br />
            This site may contain links to other websites outside our control. The Local Government Management Agency is not responsible for the privacy practices or the content of
            such websites.
          </p>
        </div>
      </div>
    </main>
  );
}
