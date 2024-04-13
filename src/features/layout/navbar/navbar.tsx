import Link from "next/link";
import styles from "./navbar.module.scss";
import { navigationLinks } from "@/constants";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import { useState } from "react";
import classNames from "classnames";
import { ScrollToTop } from "./scrollToTop";

export function Navbar() {
  const [windowWidth] = useWindowSize();

  const [activeLink, setActiveLink] = useState("-1");

  function clickHandler(href: string) {
    setActiveLink(href);
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarContainer}>
        {windowWidth > 800
          ? navigationLinks.desktop.map((link) => (
              <Link
                onClick={() => clickHandler(link.href)}
                key={link.href}
                href={link.href}
              >
                <li
                  className={classNames(
                    styles.link,
                    activeLink === link.href && styles.linkActive,
                  )}
                >
                  {link.title}
                </li>
              </Link>
            ))
          : navigationLinks.mobile.map((link) => (
              <Link
                onClick={() => clickHandler(link.href)}
                key={link.href}
                href={link.href}
              >
                <li
                  className={classNames(
                    styles.link,
                    activeLink === link.href && styles.linkActive,
                  )}
                >
                  {link.title}
                </li>
              </Link>
            ))}
        <li>
          <Image
            onClick={ScrollToTop}
            className={styles.arrow}
            src="/NavArrow.svg"
            alt="^ Back to top"
            height={22}
            width={22}
          />
        </li>
      </ul>
    </nav>
  );
}
