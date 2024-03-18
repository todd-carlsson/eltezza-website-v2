import { useEffect, useState } from "react";

type WindowSize = {
    responsiveWidth: number;
    responsiveHeight: number;
};

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        responsiveWidth: 0,
        responsiveHeight: 0,
    } as WindowSize);
    
    function handleResize() {
        setWindowSize({
            responsiveWidth: window.innerWidth,
            responsiveHeight: window.innerHeight,
        });
    }
    
    //useEffect for getting window dimensions
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            handleResize();
        }
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return [windowSize.responsiveHeight, windowSize.responsiveWidth]
}

export default useWindowSize
