import styles from "./process.module.scss"

interface ProcessProps {
    content: Array<ProcessPropObj>
    color: "--ez-orange" | "--adobe-purple"
}

type ProcessPropObj = {
    id: string,
    title: string
}

export function Process({
    content
}: ProcessProps) {
    return (
        <section className={styles.processSection}>
            <h1 className="largeText">
                OUR <span className="textGradient">PROCESS</span>
            </h1>
            <div className={styles.processContainer}>
                {content.map((item, i) => (
                    <div
                        key={item.id}
                        className={styles.processCard}
                    >

                    </div>
                ))}
            </div>
        </section>
    )
}
