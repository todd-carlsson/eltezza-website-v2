import { HighlightData, HighlightProject } from "@/types";
import { distributionName } from "./websiteInfo";

export const properCrisps = {
  gallery: [
    {
      name: "1: Post Production",
      description: "Color grading, sound design, and cinematic finishing.",
      images: [
        distributionName +
          "/highlights-page/proper-crisps/Face-off+(zoomed).jpg",
      ],
      videos: [],
    },

    {
      name: "2: Campaign Launch",
      description: "Digital rollout across multiple platforms.",
      images: [
        distributionName +
          "/highlights-page/proper-crisps/Face-off+(zoomed).jpg",
        distributionName +
          "/highlights-page/proper-crisps/Face-off+(zoomed).jpg",
        distributionName +
          "/highlights-page/proper-crisps/Face-off+(zoomed).jpg",
      ],
      videos: [],
    },
    {
      name: "3: Brand Identity",
      description: "Visual language, typography, and motion system.",
      images: [],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
    },
    {
      name: "Photo",
      description: "A single photo that captures the essence of the moment.",
      images: [
        distributionName +
          "/highlights-page/proper-crisps/Face-off+(zoomed).jpg",
      ],
      videos: [],
    },
  ] satisfies HighlightProject[],
};

export const highlightsData = [
  {
    name: "Proper Crisps",
    link: "/highlights/proper-crisps",
    project: properCrisps.gallery,
  },
] satisfies HighlightData[];
