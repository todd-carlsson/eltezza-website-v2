import { headerDescription, pageTags } from "@/constants";
import { Hero } from "@/features/layout";

export default function CreativePage() {
    return (
        <>
            <Hero
                page="creative"
                description={headerDescription.creative}
                tags={pageTags.creative}
            />
        </>
    )
}