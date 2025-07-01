import styles from "./components.module.scss";
import classNames from "classnames";

type ScrollIconProps = {
  type: "exOne" | "exTwo" | "exThree";
};

export const ScrollIcon: React.FC<ScrollIconProps> = ({ type }) => {
  return (
    <div className={classNames(styles.scrollIcon, styles[type])}>
      <span className={styles.wheel}></span>
      {type === "exThree" && (
        <>
          <span className={classNames(styles.arrow, styles.up)}></span>
          <span className={classNames(styles.arrow, styles.down)}></span>
        </>
      )}
    </div>
  );
};
