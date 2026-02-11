import { HighlightData, HighlightProject } from "@/types";

export const properCrisps = {
  gallery: [
    {
      name: "Photo",
      description: "A single photo that captures the essence of the moment.",
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      ],
      videos: [],
    },

    {
      name: "Photos",
      description: "Photos that capture the essence of the moment.",
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      ],
      videos: [],
    },
    {
      name: "Videography",
      description: "Videography",
      images: [],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
    },
    {
      name: "Photo",
      description: "A single photo that captures the essence of the moment.",
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
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
