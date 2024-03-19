import styles from "./brands.module.scss"

interface BrandsProps {
    content: Array<BrandsPropsObj>
    columns: 3 | 4
}

type BrandsPropsObj = {
    id: string,
    brand: string
    src: string
}

export function Brands({
    content,
    columns
}: BrandsProps) {
    return (
        // TODO: fix alignment of images on start and end of each grid row
        <section id="clients" className={styles.brandsSection}>
            <h1 className="largeText">OUR TRUSTED <span className="textGradient">PARTNERS</span></h1>
            <div
                className={styles.brandsGrid}
                style={{
                    gridTemplateColumns: columns === 3 ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr"
                }}
            >
                {content.map((brand) => (
                    <img
                        key={brand.id}
                        className={styles.brandLogo}
                        src={brand.src}
                        alt={brand.brand}
                    />
                ))}
            </div>
        </section>
    )
}