import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";

const archiveYears = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

export function Archive() {
  return (
    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {archiveYears.map((year) => (
          <Button
            key={year}
            variant="outline"
            className="w-full transition-colors duration-300 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-500"
            onClick={() => window.open(`https://example.com/lgda-${year}.pdf`, "_blank")}
          >
            <FileText className="h-4 w-4 mr-2" />
            LGDA {year}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}
