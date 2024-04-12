import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { HomeComponent } from "@/features/layout";
import classNames from "classnames";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Eltezza | Rise above the noise</title>
        <meta
          property="og:title"
          content="Eltezza | Rise above the noise"
          key="title"
        />
      </Head>
      <main className={classNames(styles.main, inter.className)}>
        <HomeComponent />
      </main>
    </>
  );
}
