"use client"

import Link from "next/link"
import styles from "./navbar.module.scss"
import { navigationLinks } from "@/constants"
import Image from "next/image"
import useWindowSize from "@/hooks/useWindowSize"

export function Navbar() {
    const [windowHeight, windowWidth] = useWindowSize()
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarContainer}>
                {windowWidth > 800 ?
                    navigationLinks.desktop.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <li className={styles.link}>{link.title}</li>
                        </Link>
                    ))
                    :
                    navigationLinks.mobile.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <li className={styles.link}>{link.title}</li>
                        </Link>
                    ))
                }
                <li>
                    <Image
                        src="/NavArrow.svg"
                        alt="^ Back to top"
                        height={windowWidth > 800 ? 28 : 18}
                        width={windowWidth > 800 ? 28 : 18}
                        // className={styles.link}
                    />
                </li>
            </ul>
        </nav>
    )
}