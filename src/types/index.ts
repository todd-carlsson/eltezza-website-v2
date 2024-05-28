// METADATA
export type MetaDataType = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export type CarouselData = {
  id: string;
  src: string;
  alt?: string;
  badge?: string;
  isVideo: boolean;
  thumbnail?: string;
};

export type FeaturedReviewData = {
  review: string;
  name: string;
  src: string;
};

export type TeamData = {
  id: string;
  name: string;
  src: string;
  placeholder?: string;
  position: string;
  email?: string;
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
  srcHighQuality: string;
  src: string;
  thumbnail: string;
  size: "small" | "medium" | "large";
  client: string;
  campaign: string;
};

export type BrandsData = {
  id: string;
  brand: string;
  src: string;
  maxWidth?: number;
  width?: string;
};

export type BtsData = {
  id: string;
  src: string;
  placeholder?: string;
  alt: string;
  isVideo: boolean;
};

export type AccordionData = {
  id: string;
  title: string;
  description: string;
  wrap: boolean;
};

export type TestimonialsData = {
  id: string;
  review: string;
  name: string;
  role: string;
};
