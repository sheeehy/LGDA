import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Video, Calendar } from "lucide-react";

const webinars = [
  {
    id: 1,
    title: "Introduction to LGDA",
    date: "2024-03-15",
    media: [
      { title: "Presentation Slides", type: "pdf", url: "https://example.com/intro-lgda-slides.pdf" },
      { title: "Recorded Session", type: "video", url: "https://example.com/intro-lgda-video" },
    ],
  },
];

export function Webinars() {
  const getIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4 mr-2" />;
      case "video":
        return <Video className="h-4 w-4 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {webinars.map((webinar) => (
        <Card key={webinar.id} className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">{webinar.title}</CardTitle>
            <p className="text-sm text-gray-500 flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(webinar.date).toISOString().split("T")[0]}
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {webinar.media.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-teal-600 hover:text-teal-800 hover:underline transition-colors duration-300"
                  >
                    {getIcon(item.type)}
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
