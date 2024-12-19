export interface MediaItem {
    title: string;
    type: string;
    file?: { asset: { url: string } };
    videoUrl?: string;
  }
  
  export interface Webinar {
    _id: string;
    title: string;
    date: string;
    media: MediaItem[];
  }
  
  