import Image from "next/image";
import styles from "./header.module.scss";
import { Switch } from "@/features/ui";
import Link from "next/link";

interface HeaderProps {
  page: "design" | "creative";
  color: "--ez-orange" | "--adobe-purple";
}

export function Header({ page, color }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/eltezza-home-logo.png"
          alt="Eltezza"
          width={131}
          height={22}
          className={styles.headerLogo}
        />
      </Link>
      <Switch page={page} color={color} />
    </header>
  );
}
