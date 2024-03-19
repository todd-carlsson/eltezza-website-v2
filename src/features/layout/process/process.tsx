"use client"

/* eslint-disable @next/next/no-img-element */
import styles from "./process.module.scss"
import { motion } from "framer-motion"

interface ProcessProps {
    content: Array<ProcessPropObj>
    color: "--ez-orange" | "--adobe-purple"
}

type ProcessPropObj = {
    id: string,
    title: string
}

export function Process({
    content,
    color
}: ProcessProps) {
    // TODO: Fix black text color staggering animation on design page

    const boxVariant = {
        hidden: {
            x: -2
        },
        visible: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.4,
            },
        }
    }

    const listVariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    const colorVariant = {
        hidden: {
            backgroundColor: "#fff"
        },
        visible: {
            backgroundColor: "#000",
            transition: {
                duration: 0.3
            }
        }
    }
    return (
        <section className={styles.processSection}>
            <h1 className="largeText">
                OUR <span className="textGradient">PROCESS</span>
            </h1>
            <motion.div
                className={styles.processContainer}
                style={{
                    height: ((content.length - 1) * 50) + 100
                }}
                variants={boxVariant}
                initial="hidden"
                whileInView="visible"
            >
                {content.map((item, i) => (
                    <motion.div
                        key={item.id}
                        className={styles.processCard}
                        style={{
                            top: i * 50
                        }}
                    >
                        <motion.div
                            className={styles.background}
                            style={{ backgroundColor: `var(${color})` }}
                            variants={listVariant}
                        />
                        <motion.h3
                            className={styles.processText}
                            variants={color === "--ez-orange" ? colorVariant : undefined}
                            style={{ backgroundColor: "#fff" }}
                        >
                            {item.title}
                        </motion.h3>
                        <motion.h3
                            className={styles.processNumber}
                            variants={color === "--ez-orange" ? colorVariant : undefined}
                            style={{ backgroundColor: "#fff" }}
                        >
                            {`0${item.id}`}
                        </motion.h3>
                        {i !== content.length - 1 &&
                            <img className={styles.arrow} src="/process_arrow.svg" alt="arrow" />
                        }
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
