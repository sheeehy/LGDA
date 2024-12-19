"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";
import { useState, useEffect } from "react";

interface ArchiveFile {
  year: number;
  url: string;
}

export function Archive() {
  const [archiveFiles, setArchiveFiles] = useState<ArchiveFile[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/ArchiveData");
        const result = await res.json();
        if (res.ok) {
          setArchiveFiles(result);
        } else {
          console.error("An error occurred:", result);
        }
      } catch (error) {
        console.error("Error fetching archive data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {archiveFiles.map((file) => (
          <Button
            key={file.year}
            variant="outline"
            className="w-full transition-colors duration-300 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-500"
            onClick={() => window.open(file.url, "_blank")}
          >
            <FileText className="h-4 w-4 mr-2" />
            LGDA {file.year}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}