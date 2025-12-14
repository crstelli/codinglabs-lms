import "@/app/globals.css";
import type { ChildrenNode } from "@/types/ChildrenNode";

import { fontClassName } from "@/lib/next/font";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export { metadata } from "@/lib/next/metadata";

export default function RootLayout({ children }: ChildrenNode) {
  return (
    <html lang="en">
      <body className={`${fontClassName} dark min-h-screen max-w-screen`}>
        <Navbar />
        <main className="h-full w-[95%] max-w-7xl py-30 mx-auto min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
