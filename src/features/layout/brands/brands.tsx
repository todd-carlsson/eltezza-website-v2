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
        <section>
            {content.map((brand) => (
                <img key={brand.id} src={brand.src} alt={brand.brand} />
            ))}
        </section>
    )
}