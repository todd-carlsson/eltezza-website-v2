import Link from "next/link";
import styles from "./switch.module.scss";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

interface SwitchProps {
  page: "design" | "creative";
  color: "--ez-orange" | "--adobe-purple";
}

function Switch({ page, color }: SwitchProps) {
  const [windowWidth] = useWindowSize();
  function getXValueEllipse() {
    if (windowWidth > 800) {
      return 110;
    } else return 34;
  }
  const nextPage = page === "design" ? "/creative" : "/design";
  return (
    <Link
      href={nextPage}
      scroll={false}
      shallow
      aria-label={`Switch to ${nextPage.slice(1, nextPage.length)} page`}
    >
      <div
        className={styles.switch}
        style={{
          backgroundColor: `var(${color})`,
        }}
        aria-labelledby="Toggle"
      >
        <motion.span
          className={styles.switchText}
          initial={{
            x: page === "creative" ? 5 : 60,
          }}
          animate={{
            x: page === "creative" ? 60 : 5,
          }}
          style={{
            marginLeft: page === "design" ? "1rem" : 0,
            marginRight: page === "creative" ? "1rem" : 0,
          }}
        >
          {page}
        </motion.span>
        <motion.div
          initial={{
            x: page === "creative" ? getXValueEllipse() : 0,
          }}
          animate={{
            x: page === "creative" ? 0 : getXValueEllipse(),
          }}
          className={styles.ellipse}
        />
      </div>
    </Link>
  );
}

export { Switch };
