"use client"

import Link from "next/link"
import styles from "./navbar.module.scss"
import { navigationLinks } from "@/constants"
import Image from "next/image"

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarContainer}>
                {navigationLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                        <li className={styles.link}>{link.title}</li>
                    </Link>
                ))}
                <li>
                    <Image
                        src="/NavArrow.svg"
                        alt="^ Back to top"
                        height={28}
                        width={28}
                        // className={styles.link}
                    />
                </li>
            </ul>
        </nav>
    )
}