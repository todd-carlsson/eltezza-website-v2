import { Header } from "@/features/layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <>
      <div id="contact-root"></div>
      {router.pathname !== "/" && (
        <Header
          page={router.pathname === "/design" ? "design" : "creative"}
          color={
            router.pathname === "/design" ? "--ez-orange" : "--adobe-purple"
          }
        />
      )}
      {children}
    </>
  );
}
