// METADATA
export type MetaDataType = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export type CarouselData = {
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
  name: string;
  src: string;
  placeholder?: string;
  position: string;
  email?: string;
};

export type CreativeHeroImgData = {
  src: string;
  alt: string;
};

export type CreativeHeroVideoData = {
  src: string;
  thumbnail: string;
};

export type CreativeWorkData = {
  srcHighQuality: string;
  src: string;
  thumbnail: string;
  size: "small" | "medium" | "large";
  client: string;
  campaign?: string;
};

export type BrandsData = {
  brand: string;
  src: string;
  maxWidth?: number;
  width?: string;
  needsColorInvert?: boolean;
};

export type BtsData = {
  src: string;
  placeholder?: string;
  alt: string;
  isVideo: boolean;
};

export type AccordionData = {
  title: string;
  description: string;
  wrap: boolean;
};

export type TestimonialsData = {
  review: string;
  name: string;
  role: string;
};

export type FunnelHeroContent = {
  title: string;
  thumbnail: string;
};

export type FunnelTestimonialsData = {
  id: number;
  review: string;
  author?: string;
  srcId: number;
  borderColor: "--ez-orange" | "--adobe-purple";
};

export type FunnelServicesData = {
  title: string;
  description: string;
};

export type FunnelPartnershipData = {
  description: string;
};

export interface VideoControlsProps {
  hoveredVideo: string | null;
  pauseVideo: (itemId: string) => void;
  playVideo: (itemId: string) => void;
  openFullVideo: (itemId: string) => void;
  removeFullVideo: () => void;
  openedVideo: string | null;
  getMap: () => Map<string, HTMLVideoElement>;
}

export type FunnelWorkData = Omit<
  CreativeWorkData,
  "size" | "srcHighQuality"
> & {
  // From the Vimeo url. Example: https://vimeo.com/1073451481 - srcId is 1073451481
  srcId: number;
};

export type FunnelWorkVideos = {
  promotional: FunnelWorkData[];
  organic: FunnelWorkData[];
  productFocused: FunnelWorkData[];
  ugc: FunnelWorkData[];
};

// For Facebook Pixel
declare global {
  interface Window {
    fbq: (event: string, name: string, options?: object) => void;
  }
}
