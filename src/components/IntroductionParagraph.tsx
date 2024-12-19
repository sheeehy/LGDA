import { Card, CardContent } from "@/components/ui/card";

const text = `  The theme of this year's conference is "Adapting to Change: The Director's Role in Public Service Transformation." As we navigate an increasingly complex landscape, this conference will explore how Directors of Services can lead and inspire change within local government. We'll examine strategies for responding to evolving societal needs, discuss innovative approaches to public service delivery, and delve into the critical areas of governance and accountability. Join us as we share insights, best practices, and vision for the future of local government leadership.`;

export function IntroductionParagraph() {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Annual Conference 2025</h2>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  );
}
