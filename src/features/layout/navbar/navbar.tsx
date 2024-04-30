import styles from "./navbar.module.scss";
import { navigationLinks } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Scroll } from "@/utils/scroll";
import { useScrollspy } from "@/hooks/useScrollspy";

export function Navbar() {
  const [activeLink, setActiveLink] = useState("-1");
  // Get all ids from the navigationLinks.desktop array and remove the # at the start
  const ids = Array.from(navigationLinks.desktop, (item) =>
    item.href.slice(1, item.href.length),
  );
  const activeId = useScrollspy(ids, 80);

  // Remove the current active link whenever tha id from useScrollspy changes
  useEffect(() => {
    setActiveLink("-1");
  }, [activeId]);

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
        {navigationLinks.desktop.map((link) => (
          <li
            key={link.href}
            className={classNames(
              styles.link,
              activeLink === link.href ? styles.linkActive : null,
              activeId === link.href ? styles.linkActive : null,
            )}
            onClick={() => {
              clickHandler(link.href), handleClickScroll(link.href);
            }}
            aria-roledescription="link"
            aria-current={activeId === link.href}
          >
            {link.title}
          </li>
        ))}
        <li
          onClick={() => Scroll(0, "smooth")}
          className={styles.arrowContainer}
          aria-label="Scroll to top"
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
