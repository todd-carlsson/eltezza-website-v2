import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { poppins, sourceSans } from "@/fonts";
import Layout from "./layout";
import classNames from "classnames";
import { Hotjar, Pixel } from "@/features/connection";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(poppins.variable, sourceSans.variable)}>
      <Layout>
        <Hotjar />
        <Pixel />
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
