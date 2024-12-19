import { getArchiveData } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";

interface ArchiveFile {
  year: number;
  url: string;
}

export async function Archive() {
  const archiveFiles = await getArchiveData();

  return (
    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {archiveFiles.map((file: ArchiveFile) => (
          <a key={file.year} href={file.url} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full transition-colors duration-300 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-500">
              <FileText className="h-4 w-4 mr-2" />
              LGDA {file.year}
            </Button>
          </a>
        ))}
      </div>
    </ScrollArea>
  );
}
