import "@/app/globals.css";
import type { ChildrenNode } from "@/types/ChildrenNode";

import { fontClassName } from "@/lib/next/font";
import { Footer } from "@/components/Footer";

export { metadata } from "@/lib/next/metadata";

export default function RootLayout({ children }: ChildrenNode) {
  return (
    <html lang="en">
      <body className={`${fontClassName} dark min-h-screen max-w-screen`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
