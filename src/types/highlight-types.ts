export type HighlightProject = {
  name: string;
  description: string;
  images: string[];
  videos: string[];
};

export type HighlightData = {
  name: string;
  link: string;
  project: HighlightProject[];
};
