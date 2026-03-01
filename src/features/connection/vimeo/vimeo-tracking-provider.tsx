import Script from "next/script";
import { useVimeoTracking } from "@/hooks/useVimeoTracking";

export function VimeoTrackingProvider() {
  useVimeoTracking();

  return (
    <Script
      src="https://player.vimeo.com/api/player.js"
      strategy="afterInteractive"
    />
  );
}
