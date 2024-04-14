export function Scroll(top: number, behavior: "smooth" | "auto") {
  if (typeof window !== "undefined") {
    return window.scrollTo({ top, behavior });
  }
  return null;
}
