import { FunnelHero } from "@/features/layout/hero/funnelHero";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import MetaData from "@/metadata";
import { metaData } from "@/constants";

function LandingFunnel() {
  return (
    <>
      <MetaData data={metaData.adFunnel} />
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
      <section className={styles.funnelContainer}>
        <FunnelHero />
      </section>
    </>
  );
}
export default LandingFunnel;
