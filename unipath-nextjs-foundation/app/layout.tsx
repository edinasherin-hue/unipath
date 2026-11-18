import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UniPath | Your global education journey",
  description:
    "Explore international universities, programmes and funding opportunities with UniPath.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
