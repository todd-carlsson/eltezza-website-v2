import { Header } from "@/features/layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
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
        <meta property="og:title" content="Eltezza LTD" key="title" />
        <meta
          property="og:description"
          content="We move past generic concepts and incorporate unique conceptual elements to create inimitable identities. In other words, we make your brand worth looking at."
          key="description"
        />
        <meta property="og:locale" content="en_US" key="locale" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://www.eltezza.com/" key="url" />
        <meta property="og:site_name" content="Eltezza" key="siteName" />
      </Head>
      {router.pathname !== "/" && (
        <>
          <div id="contact-root" />
          <div id="video-root" />
          <Header
            page={router.pathname === "/design" ? "design" : "creative"}
            color={
              router.pathname === "/design" ? "--ez-orange" : "--adobe-purple"
            }
          />
        </>
      )}
      {children}
    </>
  );
}
