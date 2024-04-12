import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  root: string;
  children: React.ReactNode;
}

export function Portal({ root, children }: PortalProps) {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.getElementById(root);
  }, [root]);

  return ref.current
    ? createPortal(
        <>{children}</>,
        document.getElementById(root) as HTMLElement,
      )
    : null;
}
