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
        <main className="min-h-screen px-3 sm:px-6 md:px-8 lg:px-24 xl:px-20 2xl:px-28 3xl:px-32 4xl:px-40 pt-16 lg:pt-34">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
