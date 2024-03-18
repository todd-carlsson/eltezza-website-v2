import styles from "./brands.module.scss"

interface BrandsProps {
    content: Array<BrandsPropsObj>
}

type BrandsPropsObj = {
    id: string,
    brand: string
    src: string
}

export function Brands({
    content
}: BrandsProps) {
    return (
        <section id="clients" className={styles.brandsSection}>
            <h1 className={styles.brandsTitle}>OUR TRUSTED <span className="textGradient">PARTNERS</span></h1>
            <div className={styles.brandsGrid}>
            {content.map((brand) => (
                <img key={brand.id} src={brand.src} alt={brand.brand} />
            ))}
            </div>
        </section>
    )
}