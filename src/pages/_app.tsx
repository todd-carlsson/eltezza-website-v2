import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { poppins } from "@/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return <main className={poppins.variable}>
    <Component {...pageProps} />
  </main>;
}
