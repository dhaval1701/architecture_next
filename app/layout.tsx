"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConditionalBackground from "@/components/Background";
import FloatingButtons from "@/components/FloatingButtons";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

// Splash Screen Component
function SplashScreen({ fadeOut }: { fadeOut: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ease-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: fadeOut ? "none" : "auto" }}
    >
      <div className="text-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 mx-auto mb-4">
          <Image
            src="/logos/full_logo_white.svg"
            alt="Architecture Project"
            fill
            className="object-contain animate-zoomFade"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    // Start fading out splash after 3 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Hide splash and show main content after fade completes
    const hideTimer = setTimeout(() => {
      setShowSplash(false);
      setShowMain(true);
    }, 4000); // 3s + 1s fade duration

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {showSplash && <SplashScreen fadeOut={fadeOut} />}

        <div
          className={`transition-opacity duration-1000 ${
            showMain ? "opacity-100" : "opacity-0"
          }`}
        >
          <Header />
          <ConditionalBackground />

          <main className="min-h-screen px-6 py-22 sm:px-6 sm:py-24 md:px-12 md:py-28 lg:px-16 lg:py-28 xl:px-20 xl:py-32 2xl:px-36 2xl:py-42 3xl:px-42 3xl:py-56 4xl:px-52 4xl:py-78 5xl:px-58 5xl:py-102">
            {children}
          </main>

          <FloatingButtons />
          <Footer />
        </div>
      </body>
    </html>
  );
}
