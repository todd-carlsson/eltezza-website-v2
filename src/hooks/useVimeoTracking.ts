import { useEffect } from "react";
import { useRouter } from "next/router";
import Player from "@vimeo/player";
import * as fbq from "@/lib/fpixel";

export function useVimeoTracking() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let observer: MutationObserver | null = null;

    function attachToIframe(iframe: HTMLIFrameElement) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((iframe as any)._vimeoTrackingAttached) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (iframe as any)._vimeoTrackingAttached = true;

      const player = new Player(iframe);

      let videoName = iframe.id || iframe.title || "Unknown Vimeo Video";

      const videoUrl = iframe.src;

      let playedQuarters: Record<number, boolean> = {
        25: false,
        50: false,
        75: false,
      };

      const resetProgress = () => {
        playedQuarters = { 25: false, 50: false, 75: false };
      };

      player
        .getVideoTitle()
        .then((title) => {
          if (title) videoName = title;
        })
        .catch(() => {});

      player.on("play", () => {
        fbq.event("VimeoVideoPlayed", {
          video_name: videoName,
          video_url: videoUrl,
          event_type: "PlayStart",
        });

        resetProgress();
      });

      player.on("timeupdate", (data) => {
        const percentage = Math.floor(data.percent * 100);

        [25, 50, 75].forEach((mark) => {
          if (percentage >= mark && !playedQuarters[mark]) {
            fbq.event("VimeoVideoProgress", {
              video_name: videoName,
              video_url: videoUrl,
              percentage_watched: mark,
            });

            playedQuarters[mark] = true;
          }
        });
      });

      player.on("ended", () => {
        fbq.event("VimeoVideoCompleted", {
          video_name: videoName,
          video_url: videoUrl,
          percentage_watched: 100,
        });

        resetProgress();
      });

      player.on("seeked", (data) => {
        const currentPercentage = Math.floor(data.percent * 100);

        [75, 50, 25].forEach((mark) => {
          if (currentPercentage < mark) {
            playedQuarters[mark] = false;
          }
        });
      });
    }

    function scanAndAttach() {
      const iframes = document.querySelectorAll<HTMLIFrameElement>(
        'iframe[src*="player.vimeo.com"]',
      );

      iframes.forEach((iframe) => attachToIframe(iframe));
    }

    scanAndAttach();

    observer = new MutationObserver(() => {
      scanAndAttach();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    router.events.on("routeChangeComplete", scanAndAttach);

    return () => {
      observer?.disconnect();
      router.events.off("routeChangeComplete", scanAndAttach);
    };
  }, [router.events]);
}
