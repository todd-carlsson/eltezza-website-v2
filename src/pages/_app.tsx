import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { poppins, sourceSans } from "@/fonts";
import Layout from "./layout";
import classNames from "classnames";
import { Hotjar, VimeoTrackingProvider } from "@/features/connection";
import * as fbq from "@/lib/fpixel";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <main className={classNames(poppins.variable, sourceSans.variable)}>
      <Layout>
        <Hotjar />
        <VimeoTrackingProvider />
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
