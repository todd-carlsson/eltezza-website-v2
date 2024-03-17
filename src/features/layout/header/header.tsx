import Image from "next/image"
import styles from "./header.module.scss"
import Switch from "./switch"

export function Header() {
    return (
        <header className={styles.header}>
            <Image
                src="/images/eltezza-home-logo.png"
                alt="Eltezza"
                width={131}
                height={22}
                className={styles.headerLogo}
            />
            <Switch page="design" color="--ez-orange" />
        </header>
    )
}