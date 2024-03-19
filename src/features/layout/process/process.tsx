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
            <div
                className={styles.processContainer}
                style={{
                    height: ((content.length - 1) * 50) + 100
                }}
            >
                {content.map((item, i) => (
                    <>
                        <div
                            key={item.id}
                            className={styles.processCard}
                            style={{
                                top: i * 50
                            }}
                        >
                            <h3 className={styles.processText}>{item.title}</h3>
                            <h3 className={styles.processNumber}>{`0${item.id}`}</h3>
                            <img className={styles.arrow} src="/process_arrow.svg" alt="arrow" />
                        </div>
                        
                    </>
                ))}
            </div>
        </section>
    )
}
