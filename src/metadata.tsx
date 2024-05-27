import React from "react";
import { BtsData, CarouselData, MetaDataType } from "./types";
import Head from "next/head";
import useWindowSize from "./hooks/useWindowSize";

interface MetaDataProps {
  data: MetaDataType;
  favIconColor?: "purple" | "orange";
  imageData?: Array<BtsData | CarouselData>;
  scroll?: boolean;
}

export default function MetaData({
  data,
  favIconColor = "orange",
  imageData,
  scroll = true,
}: MetaDataProps) {
  const [windowWidth] = useWindowSize();
  return (
    <Head>
      <title>{data.title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`favicon-${favIconColor}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`favicon-${favIconColor}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`favicon-${favIconColor}/favicon-16x16.png`}
      />
      <link
        rel="manifest"
        href={`favicon-${favIconColor}/site.webmanifest`}
      ></link>
      {!scroll && (
        <style>{`body { overflow-y: ${windowWidth <= 1200 ? "scroll" : "hidden"}; }`}</style>
      )}
      {imageData &&
        imageData.map((item) => {
          if (!item.isVideo) {
            return (
              <link key={item.id} rel="preload" as="image" href={item.src} />
            );
          } else {
            return (
              <link key={item.id} rel="preload" as="video" href={item.src} />
            );
          }
        })}
      <meta property="og:title" content={data.title} key="title" />
      <meta name="description" content={data.description} key="description" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.link} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={data.link} />
      <meta property="twitter:title" content={data.title} />
      <meta property="twitter:description" content={data.description} />
      <meta property="twitter:image" content={data.image} />

      {/* Meta Tags Generated with https://metatags.io */}
    </Head>
  );
}
