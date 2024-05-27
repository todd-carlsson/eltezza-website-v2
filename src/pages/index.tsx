import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { HomeComponent } from "@/features/layout";
import classNames from "classnames";
import MetaData from "@/metadata";
import { landingPageData, metaData } from "@/constants";
import { motion, useIsPresent } from "framer-motion";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const isPresent = useIsPresent();
  const router = useRouter();
  return (
    <>
      <MetaData
        data={metaData.home}
        imageData={[...landingPageData.design, ...landingPageData.creative]}
        scroll={false}
      />
      <main className={classNames(styles.main, inter.className)}>
        <HomeComponent />
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{
            originX: isPresent ? 0 : 1,
            backgroundColor:
              router.pathname === "/creative"
                ? "var(--adobe-purple)"
                : "var(--ez-orange)",
          }}
          className={styles.privacyScreen}
        />
      </main>
    </>
  );
}
