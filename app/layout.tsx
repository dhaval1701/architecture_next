import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConditionalBackground from "@/components/Background";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Architecture Project",
  description: "Architecture Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        <ConditionalBackground />
        {/* px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 */}

        {/* <main className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-36 3xl:p-42 4xl:p-48">
          {children}
        </main> */}
        <main
          className="
    min-h-screen
    px-4  py-16
    sm:px-6  sm:py-24
    md:px-12 md:py-28
    lg:px-16 lg:py-28
    xl:px-20 xl:py-32
    2xl:px-36 2xl:py-42
    3xl:px-42 3xl:py-46
    4xl:px-48 4xl:py-52
  "
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
