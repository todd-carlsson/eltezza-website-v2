import styles from "./navbar.module.scss";
import { navigationLinks } from "@/constants";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import { useState } from "react";
import classNames from "classnames";
import { Scroll } from "@/utils/scroll";

export function Navbar() {
  const [windowWidth] = useWindowSize();

  const [activeLink, setActiveLink] = useState("-1");

  function clickHandler(href: string) {
    setActiveLink(href);
  }

  function handleClickScroll(id: string) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarContainer}>
        {windowWidth > 800 &&
          navigationLinks.desktop.map((link) => (
            <li
              key={link.href}
              className={classNames(
                styles.link,
                activeLink === link.href && styles.linkActive,
              )}
              onClick={() => {
                clickHandler(link.href), handleClickScroll(link.href);
              }}
            >
              {link.title}
            </li>
          ))}
        <li
          onClick={() => Scroll(0, "smooth")}
          className={styles.arrowContainer}
        >
          <Image
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
