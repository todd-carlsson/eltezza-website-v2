/* eslint-disable @next/next/no-img-element */
import useWindowSize from "@/hooks/useWindowSize";
import styles from "./bts.module.scss";
import classNames from "classnames";

export default function BTSText({ page }: { page: "design" | "creative" }) {
  const [windowWidth] = useWindowSize();
  if (page === "design")
    return (
      <>
        <div className={styles.textBlock}>
          <h1
            className={classNames("largeText", styles.btsText)}
            style={{ alignSelf: "flex-end" }}
          >
            TAKE A
          </h1>
          <img
            className={styles.mainImgDesign}
            src="/images/bts_design_main.svg"
            alt="BTS Section"
          />
        </div>
        <div className={styles.textBlock}>
          <h1 className={classNames("largeText", styles.btsText)}>
            PEAK BEHIND
          </h1>
          <img
            className={styles.secondaryImgDesign}
            src="/images/bts_design_2.svg"
            alt="BTS Section"
          />
        </div>
        <div className={styles.textBlock}>
          <h1 className={classNames("largeText", styles.btsText)}>
            THE
            <span className="textGradient"> CURTAINS</span>
          </h1>
        </div>
      </>
    );
  else if (page === "creative")
    return (
      <>
        <div>
          <div className={styles.textBlock}>
            <h1
              className={classNames("largeText", styles.btsText)}
              style={{ alignSelf: "flex-end" }}
            >
              THE
            </h1>
            {windowWidth > 1000 && (
              <img
                className={styles.mainImgDesign}
                src="/images/bts_creative.svg"
                alt="BTS Section"
              />
            )}
          </div>
          <div className={styles.textBlock}>
            <h1 className={classNames("largeText", styles.btsText)}>PROCESS</h1>
          </div>
          <div className={styles.textBlock}>
            <h1 className={classNames("largeText", styles.btsText)}>
              IS <span className="textGradient">MESSY!</span>
            </h1>
          </div>
        </div>
        {windowWidth <= 1000 && (
          <img
            className={styles.mainImgDesign}
            src="/images/bts_creative.svg"
            alt="BTS Section"
          />
        )}
      </>
    );
}
