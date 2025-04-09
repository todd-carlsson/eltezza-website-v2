import { useState, useRef, useCallback } from "react";

export function useVideoControls() {
  const itemsRef = useRef<null | Map<string, HTMLVideoElement>>(null);
  const [hoveredVideo, setHoveredVideo] = useState<null | string>(null);
  const [openedVideo, setOpenedVideo] = useState<null | string>(null);

  const getMap = useCallback(() => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }, []);

  const openFullVideo = useCallback((itemId: string) => {
    setOpenedVideo(itemId);
  }, []);

  const removeFullVideo = useCallback(() => {
    setOpenedVideo(null);
  }, []);

  const playVideo = useCallback(
    (itemId: string) => {
      setHoveredVideo(itemId);
      const map = getMap();
      const node = map.get(itemId);
      if (node) node.play();
    },
    [getMap],
  );

  const pauseVideo = useCallback(
    (itemId: string) => {
      setHoveredVideo(null);
      const map = getMap();
      const node = map.get(itemId);
      if (node) {
        node.pause();
        node.currentTime = 0;
      }
    },
    [getMap],
  );

  return {
    hoveredVideo,
    openedVideo,
    playVideo,
    pauseVideo,
    openFullVideo,
    removeFullVideo,
    getMap,
  };
}
