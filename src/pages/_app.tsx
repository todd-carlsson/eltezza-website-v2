import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { poppins, sourceSans } from "@/fonts";
import Layout from "./layout";
import classNames from "classnames";
import styles from "@/styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={classNames(poppins.variable, sourceSans.variable, styles.body)}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
