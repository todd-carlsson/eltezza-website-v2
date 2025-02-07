import styles from "./bts.module.scss";
import classNames from "classnames";
import { memo } from "react";
import Image from "next/image";

export const BTSText = memo(function BTSText({
  page,
}: {
  page: "design" | "creative";
}) {
  /* THIS FUNCTION RETURNS A DIFFERENT COMPONENT BASED ON THE PAGE THAT IS ACTIVE */
  if (page === "design")
    return (
      <div>
        <div className={styles.textBlock}>
          <h1
            className={classNames(
              "largeText",
              styles.btsText,
              styles.designBtsText,
            )}
            style={{ alignSelf: "flex-end" }}
          >
            TAKE A
          </h1>
          <Image
            className={styles.mainImgDesign}
            src="/images/bts_design_main.svg"
            alt="BTS Section"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.textBlock}>
          <h1
            className={classNames(
              "largeText",
              styles.btsText,
              styles.designBtsText,
            )}
          >
            PEEK BEHIND
          </h1>
          <Image
            className={styles.secondaryImgDesign}
            src="/images/bts_design_2.svg"
            alt="BTS Section"
            width={60}
            height={60}
          />
        </div>
        <div className={styles.textBlock}>
          <h1
            className={classNames(
              "largeText",
              styles.btsText,
              styles.designBtsText,
            )}
          >
            THE
            <span className="textGradient"> CURTAINS</span>
          </h1>
        </div>
      </div>
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
            <Image
              className={classNames(
                styles.mainImgCreative,
                styles.creativeImgDesktop,
              )}
              src="/images/bts_creative.svg"
              alt="BTS Section"
              width={200}
              height={200}
            />
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
        <Image
          className={classNames(
            styles.mainImgCreative,
            styles.creativeImgMobile,
          )}
          src="/images/bts_creative.svg"
          alt="BTS Section"
          width={200}
          height={200}
        />
      </>
    );
});
