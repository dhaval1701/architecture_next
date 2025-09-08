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
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  // SplashScreen.tsx stays the same except duration shortened:
  // SplashScreen.tsx
  useEffect(() => {
    const duration = 1000; // 1 second load
    const interval = 16;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Show logo immediately after loading
          setTimeout(() => setShowLogo(true), 50);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-1000 ease-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: fadeOut ? "none" : "auto" }}
    >
      {/* Logo Container */}
      <div className="text-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="relative w-full h-28 md:h-32 lg:h-42 3xl:h-64 mx-auto overflow-hidden">
          <div
            className={`absolute inset-0 transition-transform duration-800 ease-out ${
              showLogo ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <Image
              src="/logos/full_logo.svg"
              alt="Architecture Project"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Loading Line */}
      <div className="w-64 sm:w-80 md:w-96 h-1 bg-gray-200 rounded-full mb-8 overflow-hidden mt-10">
        <div
          className="h-full bg-gradient-to-r from-[#5a5a5a] to-[#292929] transition-all duration-75 ease-out rounded-full"
          style={{ width: `${loadingProgress}%` }}
        />
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

  // RootLayout.tsx
  useEffect(() => {
    // Fade out starts 1s load + 2s logo hold = 3s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Show main after fade out finishes (~0.8–1s later)
    const hideTimer = setTimeout(() => {
      setShowSplash(false);
      setShowMain(true);
    }, 3800);

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

          <main className="min-h-screen px-6 py-22 sm:px-6 sm:py-24 md:px-12 md:py-28 lg:px-16 lg:py-28 xl:px-20 xl:py-32 2xl:px-36 2xl:py-42 3xl:px-48 3xl:py-56 4xl:px-60 4xl:py-78 5xl:px-80 5xl:py-102">
            {children}
          </main>

          <FloatingButtons />
          <Footer />
        </div>
      </body>
    </html>
  );
}
