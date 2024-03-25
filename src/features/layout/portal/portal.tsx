import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Portal({ children }: React.PropsWithChildren) {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.getElementById("contact-root");
  }, []);

  return ref.current
    ? createPortal(
        <>{children}</>,
        document.getElementById("contact-root") as HTMLElement,
      )
    : null;
}
