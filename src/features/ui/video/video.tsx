/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { useInView } from "framer-motion";
import React, { useRef, useState, useEffect, HtmlHTMLAttributes } from "react";

interface VideoUIProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  thumbnail?: string;
  autoplay?: boolean;
  muted?: boolean;
}

export function VideoUI({
  src,
  thumbnail,
  autoplay = true,
  muted = true,
  ...props
}: VideoUIProps) {
  const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
  };

  const videoParentRef = useRef<
    HTMLVideoElement | HtmlHTMLAttributes<HTMLAllCollection> | undefined
  >(undefined);

  const isInView = useInView(videoParentRef);

  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = muted;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = autoplay;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = isInView ? player.play() : player.pause();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, [autoplay, muted, isInView]);

  return shouldUseImage ? (
    <img src={src} alt="Muted Video" {...props} />
  ) : (
    <div
      ref={videoParentRef}
      dangerouslySetInnerHTML={{
        __html: `
        <video
          class=${props.className}
          poster=${thumbnail}
          loop
          ${muted && "muted"}
          ${autoplay && "autoplay"}
          playsinline
          preload="metadata"
          width=${props.style?.width}
          height=${props.style?.height}
        >
        <source src="${src}" type="video/mp4" />
        </video>`,
      }}
    />
  );
}
