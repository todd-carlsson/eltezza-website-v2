import { FunnelHero } from "@/features/layout/hero/funnelHero";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

function LandingFunnel() {
  return (
    <>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/images/eltezza_gradientLogo.svg"
            alt="Eltezza"
            width={164}
            height={56}
            className={styles.logo}
          />
        </Link>
      </div>
      <FunnelHero />
    </>
  );
}
export default LandingFunnel;
