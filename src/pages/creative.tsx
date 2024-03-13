import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CreativePage() {
    return (
        <div
            style={{ padding: 100, fontSize: 40 }}
            className={inter.className}
        >
            Creative Page
        </div>
    )
}