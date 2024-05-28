import { useEffect, useState } from "react";

function ChromeDetect() {
  const [isChrome, setIsChrome] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.chrome ? setIsChrome(true) : setIsChrome(false);
    }
  }, []);

  return isChrome;
}

export default ChromeDetect;
