import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
        {/* px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 */}
        <main className="min-h-screen px-4 sm:px-8 md:px-34 py-12 pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
