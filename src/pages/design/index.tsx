import { headerDescription, pageTags } from "@/constants";
import { Hero } from "@/features/layout";

export default function DesignPage() {
    return (
        <>
            <Hero
                page="design"
                description={headerDescription.design}
                tags={pageTags.design}
            />
        </>
    )
}