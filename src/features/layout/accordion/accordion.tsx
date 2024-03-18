"use client"

import { useState } from "react"
import styles from "./accordion.module.scss"
import { motion, AnimatePresence } from "framer-motion"

interface AccordionProps {
    content: Array<AccordionPropsObj>
    color: "--ez-orange" | "--adobe-purple"
}

type AccordionPropsObj = {
    id: string,
    title: string,
    description: string
}

export function Accordion({
    content,
    color
}: AccordionProps) {
    const [active, setActive] = useState<string>("-1")
    return (
        <div id="services" className={styles.accordion}>
            <p className={styles.title}>WHAT WE DO | SERVICES</p>
            <div>
                {content.map((item) => (
                    <div
                        className={styles.accordionSection}
                        key={item.id}
                        onMouseOver={() => setActive(item.id)}
                        onMouseLeave={() => setActive("-1")}
                        style={{
                            backgroundColor: active === item.id ? `var(${color})` : "#000"
                        }}
                    >
                        <h1
                            className={styles.accordionTitle}
                            style={{
                                color: active === item.id && color !== "--adobe-purple"
                                    ? "#000" : "#fff"
                            }}
                        >
                            {item.title}
                        </h1>
                        {/* TODO: Fix accordion description making the 
                        accordion section too large when rendered in
                         */}
                        <AnimatePresence>
                            {active === item.id &&
                                <motion.p
                                    initial={{
                                        opacity: 0
                                    }}
                                    animate={{
                                        opacity: 1
                                    }}
                                    exit={{
                                        opacity: 0
                                    }}
                                    className={styles.accordionDescription}
                                    style={{
                                        color: color === "--adobe-purple" ? "#fff" : "#000"
                                    }}
                                >
                                    {item.description}
                                </motion.p>
                            }
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}