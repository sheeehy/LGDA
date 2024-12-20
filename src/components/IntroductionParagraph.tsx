import { getIntroductionParagraph } from "@/app/lib/sanity";
import { Card, CardContent } from "@/components/ui/card";

export async function IntroductionParagraph() {
  const data = await getIntroductionParagraph();

  if (!data) return null;

  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">{data.title}</h2>
        <p className="text-gray-700 leading-relaxed">{data.text}</p>
      </CardContent>
    </Card>
  );
}
