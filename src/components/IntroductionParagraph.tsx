"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface IntroductionParagraphData {
  _id: string;
  title: string;
  text: string;
}

export function IntroductionParagraph() {
  const [data, setData] = useState<IntroductionParagraphData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/ParagraphData");
        const result = await res.json();
        if (res.ok) {
          setData(result);
        } else {
          console.error("An error occurred:", result);
        }
      } catch (error) {
        console.error("Error fetching introduction paragraph data:", error);
      }
    }
    fetchData();
  }, []);

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
