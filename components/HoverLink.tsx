import Link from "next/link";
import type { ChildrenNode } from "@/types/ChildrenNode";

interface Props extends ChildrenNode {
  href: string;
  active?: boolean;
}

function HoverLink({ children, href, active = false }: Props) {
  return (
    <Link
      href={href}
      className={`text-muted-foreground duration-150 ${active ? "text-primary" : "hover:text-primary"}`}
    >
      {children}
    </Link>
  );
}

export { HoverLink };
