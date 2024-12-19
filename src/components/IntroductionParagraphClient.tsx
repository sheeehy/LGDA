"use client";

import { Card, CardContent } from "@/components/ui/card";

interface IntroductionParagraphData {
  _id: string;
  title: string;
  text: string;
}

interface IntroductionParagraphClientProps {
  data: IntroductionParagraphData;
}

export function IntroductionParagraphClient({ data }: IntroductionParagraphClientProps) {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">{data.title}</h2>
        <p className="text-gray-700 leading-relaxed">{data.text}</p>
      </CardContent>
    </Card>
  );
}
