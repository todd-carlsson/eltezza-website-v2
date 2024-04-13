export function ScrollToTop() {
  if (typeof window !== "undefined") {
    return window.scrollTo(0, 0);
  }
  return null;
}
