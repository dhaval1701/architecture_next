// hooks/useSplashScreen.ts
"use client";
import { useState, useEffect } from "react";

export function useSplashScreen(duration: number = 3000) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return showSplash;
}
