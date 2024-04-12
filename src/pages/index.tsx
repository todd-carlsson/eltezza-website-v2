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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta
          property="og:title"
          content="Eltezza | Rise above the noise"
          key="title"
        />
        <meta
          property="og:description"
          content="We move past generic concepts and incorporate unique conceptual elements to create inimitable identities. In other words, we make your brand worth looking at."
          key="description"
        />
      </Head>
      <main className={classNames(styles.main, inter.className)}>
        <HomeComponent />
      </main>
    </>
  );
}
