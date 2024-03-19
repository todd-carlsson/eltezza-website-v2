import styles from "./process.module.scss"

interface ProcessProps {
    content: Array<ProcessPropObj>
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
            {content.map((item) => (
                <h1 key={item.id}>{item.title}</h1>
            ))}
        </section>
    )
}
