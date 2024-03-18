"use client"

import Image from "next/image"
import styles from "./header.module.scss"
import { Switch } from "@/features/ui"

interface HeaderProps {
    page: "design" | "creative"
    color: "--ez-orange" | "--adobe-purple"
}

export function Header({
    page,
    color
}: HeaderProps) {
    return (
        <header className={styles.header}>
            {/* TODO: Fix overflow on background so that it
            doesn't cover scrollbar
             */}
            <div className={styles.headerBackground} />
            <Image
                src="/images/eltezza-home-logo.png"
                alt="Eltezza"
                width={131}
                height={22}
                className={styles.headerLogo}
            />
            <Switch page={page} color={color} />
        </header>
    )
}