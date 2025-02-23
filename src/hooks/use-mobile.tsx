"use client";

import { useCallback, useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return isMobile;
}
