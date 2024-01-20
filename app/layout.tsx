import { Montserrat } from "next/font/google";
import "./globals.css";

import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import Footer from "./Footer";
import ReduxProvider from "./_redux/Provider";
import ReactQueryClientProvider from "./_reactQuery/Provider";

const montserrat = Montserrat({ subsets: ["latin"] });

const SlideCart = dynamic(() => import("./_components/SlideCart"), {
  ssr: false,
});

import type { Metadata } from "next";

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
      <ReactQueryClientProvider>
        <body suppressHydrationWarning className={montserrat.className}>
          <ReduxProvider>
            <Header />
            {children}
            <Footer />

            <SlideCart />
            <Toaster />
          </ReduxProvider>
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}
