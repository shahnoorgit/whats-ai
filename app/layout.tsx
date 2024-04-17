import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/Components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Find the Best Cars In Your Locality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
