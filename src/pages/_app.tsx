import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { poppins } from "@/fonts";
import { useEffect } from "react";
import Router from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const checkPage = () => {
      console.log('PAGE CHANGED')
    }

    Router.events.on('routeChangeStart', checkPage); // add listener

    return () => {
      Router.events.off('routeChangeStart', checkPage); // remove listener
    }
  }, []);
  return <main className={poppins.variable}>
    <Component {...pageProps} />
  </main>;
}
