import Image from "next/image";
import styles from "./header.module.scss";

export function FunnelHeader() {
  return (
    <header className={styles.logoContainer}>
      <Image
        src="/images/eltezza_gradientLogo.svg"
        alt="Eltezza"
        width={164}
        height={56}
        className={styles.logo}
      />
    </header>
  );
}
