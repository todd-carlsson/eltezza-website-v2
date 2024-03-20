import { Header } from "@/features/layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <>
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
