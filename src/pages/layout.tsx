import { Header } from "@/features/layout";
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const router = useRouter()
    return (
        <>
            {router.pathname !== "/" &&
                <Header
                    page={router.pathname === "/design" ? "design" : "creative"}
                    color={router.pathname === "/design" ? "--ez-orange" : "--adobe-purple"}
                />}
            {children}
        </>
    )
}