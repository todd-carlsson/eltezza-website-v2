import styles from "./services.module.scss"

interface ServicesProps {
    content: Array<ServicesPropsObj>
}

type ServicesPropsObj = {
    id: string,
    title: string,
    description: string
}

export function Services({
    content
}: ServicesProps) {
    return (
        <div id="whatwedo" className={styles.services}>
            <p className={styles.description}>WHAT WE DO | SERVICES</p>
            <div>
                {content.map((service) => (
                    <div className={styles.service} key={service.id}>
                        <h1 className={styles.serviceTitle}>
                            {service.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}