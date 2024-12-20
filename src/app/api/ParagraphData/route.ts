import { NextResponse } from "next/server";
import { getIntroductionParagraph } from "@/app/lib/sanity";
import { auth } from "@clerk/nextjs";

export const revalidate = 0; // revalidate at most every second

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await getIntroductionParagraph();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching introduction paragraph:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
