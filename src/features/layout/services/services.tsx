import { useState } from "react"
import styles from "./services.module.scss"
import { motion, AnimatePresence } from "framer-motion"

interface ServicesProps {
    content: Array<ServicesPropsObj>
    color: "--ez-orange" | "--adobe-purple"
}

type ServicesPropsObj = {
    id: string,
    title: string,
    description: string
}

export function Services({
    content,
    color
}: ServicesProps) {
    const [active, setActive] = useState<string>("-1")
    return (
        <div id="whatwedo" className={styles.services}>
            <p className={styles.description}>WHAT WE DO | SERVICES</p>
            <div>
                {content.map((service) => (
                    <div
                        className={styles.service}
                        key={service.id}
                        onMouseOver={() => setActive(service.id)}
                        onMouseLeave={() => setActive("-1")}
                        style={{
                            backgroundColor: active === service.id ? `var(${color})` : "#000"
                        }}
                    >
                        <h1
                            className={styles.serviceTitle}
                            style={{
                                color: active === service.id && color !== "--adobe-purple"
                                    ? "#000" : "#fff"
                            }}
                        >
                            {service.title}
                        </h1>
                        {active === service.id &&
                            <AnimatePresence>
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
                                    className={styles.serviceDescription}
                                    style={{
                                        color: color === "--adobe-purple" ? "#fff" : "#000"
                                    }}
                                >
                                    {service.description}
                                </motion.p>
                            </AnimatePresence>}
                    </div>
                ))}
            </div>
        </div>
    )
}