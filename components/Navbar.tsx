"use client";

import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

import { HoverLink } from "@/components/HoverLink";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="z-1 fixed left-1/2 -translate-x-1/2 grid grid-cols-[auto_1fr_auto] mt-4 w-[90%] border px-8 py-2 rounded-md">
      <div>Logo</div>
      <ul className="flex items-center justify-center gap-10">
        {NAV_LINKS.map((el) => {
          const isActive = pathname === el.href;
          return (
            <HoverLink key={el.href} active={isActive} href={el.href}>
              {el.label}
            </HoverLink>
          );
        })}
      </ul>
      <div>Account</div>
    </nav>
  );
}

export { Navbar };
