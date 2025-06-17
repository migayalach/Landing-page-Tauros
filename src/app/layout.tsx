import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import { Menu } from "@/components";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    default: "Taurus",
    template: "%s | Taurus",
  },
  description:
    "Gelatinas de pata Taurus para articulaciones fuertes y salud natural.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
