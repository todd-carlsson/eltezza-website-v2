"use client"

import Link from "next/link"
import styles from "./switch.module.scss"
import { motion } from "framer-motion"
import useWindowSize from "@/hooks/useWindowSize"

interface SwitchProps {
    page: "design" | "creative"
    color: "--ez-orange" | "--adobe-purple"
}

function Switch({
    page,
    color
}: SwitchProps) {
    const [windowHeight, windowWidth] = useWindowSize()
    return (
        <Link href={page === "design" ? "/creative" : "/design"}>
            <div
                className={styles.switch}
                style={{
                    backgroundColor: `var(${color})`,
                }}
            >
                {windowWidth > 800 &&
                    <motion.span
                        initial={{
                            x: page === "creative" ? 5 : 60
                        }}
                        animate={{
                            x: page === "creative" ? 60 : 5
                        }}
                        style={{
                            marginLeft: page === "design" ? "1rem" : 0,
                            marginRight: page === "creative" ? "1rem" : 0,
                        }}
                    >
                        {page}
                    </motion.span>
                }
                <motion.div
                    initial={{
                        x: page === "creative"
                            ? windowWidth > 800
                                ? 110 : 34
                            : 0
                    }}
                    animate={{
                        x: page === "creative"
                            ? 0 : windowWidth > 800
                                ? 110: 34
                    }}
                    className={styles.ellipse} />
            </div>
        </Link>
    )
}

export { Switch }