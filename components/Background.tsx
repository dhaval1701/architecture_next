"use client";
import { usePathname } from "next/navigation";

export default function ConditionalBackground() {
  const pathname = usePathname();
  const shouldShowBackground =
    pathname === "/projects" || pathname.startsWith("/projects/");

  if (!shouldShowBackground) return null;

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: "url('/projects/full_background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    />
  );
}
