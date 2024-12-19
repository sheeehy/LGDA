import { Webinars } from "./Webinars";
import { Archive } from "./Archive";
import { IntroductionParagraph } from "./IntroductionParagraph";

export function Dashboard() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="bg-teal-600 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">LGDA Dashboard</h1>
      </header>

      <IntroductionParagraph />

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Webinars</h2>
        <Webinars />
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Archive</h2>
        <Archive />
      </section>
    </div>
  );
}
