import { Montserrat } from "next/font/google";
import "./globals.css";

import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bandage",
  description: "Sample E-commerce frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
