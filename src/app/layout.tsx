import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mahreen Indonesia",
  description:
    "Wujudkan ide keratif dengan Teknologi bersama Mahreen Indonesia.",
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full text-text-primary flex font-poppins flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
