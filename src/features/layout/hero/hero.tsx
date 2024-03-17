import styles from "./hero.module.scss";

interface HeroProps {
    page: "design" | "creative"
    description: string
    tags: Array<string>
}

export function Hero({
    page,
    description,
    tags
}: HeroProps) {
    return (
        <div>Hero</div>
    )
}