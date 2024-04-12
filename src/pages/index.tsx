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
          href="favicon-orange/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-orange/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-orange/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon-orange/site.webmanifest"></link>
        <meta
          property="og:title"
          content="Eltezza | Rise above the noise"
          key="title"
        />
        <meta
          name="description"
          content="We move past generic concepts and incorporate unique conceptual elements to create inimitable identities. In other words, we make your brand worth looking at."
          key="description"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eltezza.com/" />
        <meta property="og:title" content="Eltezza | Rise above the noise" />
        <meta
          property="og:description"
          content="We move past generic concepts and incorporate unique conceptual elements to create inimitable identities. In other words, we make your brand worth looking at."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712889804/EZ%20Website%20-%20Misc/riseabovethenoise_ffeyu4.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://eltezza.com/" />
        <meta
          property="twitter:title"
          content="Eltezza | Rise above the noise"
        />
        <meta
          property="twitter:description"
          content="We move past generic concepts and incorporate unique conceptual elements to create inimitable identities. In other words, we make your brand worth looking at."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712889804/EZ%20Website%20-%20Misc/riseabovethenoise_ffeyu4.jpg"
        />

        {/* Meta Tags Generated with https://metatags.io */}
      </Head>
      <main className={classNames(styles.main, inter.className)}>
        <HomeComponent />
      </main>
    </>
  );
}
