import classNames from "classnames";
import { useEffect } from "react";
import styles from "./calendlyEmbed.module.scss";

interface CalendlyScreenProps {
  url: string;
}

export const CalendlyScreen = ({ url }: CalendlyScreenProps) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js",
    );
    head !== null && head.appendChild(script);
  }, []);

  return (
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
  );
};
