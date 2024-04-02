export type CarouselData = {
  id: string;
  src: string;
  title: string;
  subTitle: string;
  link: string;
};

export type TeamData = {
  id: string;
  name: string;
  src: string;
  position: string;
};

export type CreativeHeroImgData = {
  id: string;
  src: string;
  alt: string;
};

export type CreativeHeroVideoData = {
  id: string;
  src: string;
  thumbnail: string;
};

export type CreativeWorkData = {
  id: string;
  src: string;
  thumbnail: string;
  size: "small" | "medium" | "large";
};

export type BrandsData = {
  id: string;
  brand: string;
  src: string;
};

export type BtsData = {
  id: string;
  src: string;
  alt: string;
  isVideo: boolean;
};

export type AccordionData = {
  id: string;
  title: string;
  description: string;
  wrap: boolean;
};
