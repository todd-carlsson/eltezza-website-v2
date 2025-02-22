import classNames from "classnames";
import { useEffect } from "react";
import styles from "./calendlyEmbed.module.scss";

interface CalendlyEmbedProps {
  url: string;
  onClose: () => void;
  showModal: boolean;
}

export const CalendlyEmbed = ({ url, showModal }: CalendlyEmbedProps) => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (document.head) {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.head.appendChild(script);
        observer.disconnect(); // Stop observing once script is loaded
      }
    });

    if (!document.head) {
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    } else {
      // Head is already available, append the script immediately
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {showModal && (
        <div
          className={classNames("calendly-inline-widget", styles.calendlyEmbed)}
          data-url={url}
          style={{
            position: "fixed",
            width: "100%",
            zIndex: "9999",
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        ></div>
      )}
    </>
  );
};
