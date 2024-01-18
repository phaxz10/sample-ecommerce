import { Montserrat } from "next/font/google";
import "./globals.css";

import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import ReduxProvider from "./_redux/Provider";
import { Toaster } from "react-hot-toast";

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
      <body suppressHydrationWarning className={montserrat.className}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>

        <Footer />

        <Toaster />
      </body>
    </html>
  );
}
