import { Dashboard } from "@/components/Dashboard";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <Dashboard />
    </main>
  );
}
