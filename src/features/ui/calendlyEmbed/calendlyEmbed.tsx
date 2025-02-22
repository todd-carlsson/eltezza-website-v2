import classNames from "classnames";
import { useEffect } from "react";
import styles from "./calendlyEmbed.module.scss";

export const CalendlyEmbed = (url: string) => {
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
      style={{ position: "fixed" }}
    ></div>
  );
};
