import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { HomeComponent } from "@/features/layout";
import classNames from "classnames";
import MetaData from "@/metadata";
import { metaData } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MetaData data={metaData.home} />
      <main className={classNames(styles.main, inter.className)}>
        <HomeComponent />
      </main>
    </>
  );
}
