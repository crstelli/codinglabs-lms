import { Archive, Clock, Flame } from "lucide-react";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Wishlist",
    href: "/wishlist",
  },
];

export const STATISTICS = [
  {
    icon: Archive,
    label: "Courses",
    value: 10,
  },

  {
    icon: Flame,
    label: "Days",
    value: 4,
  },

  {
    icon: Clock,
    label: "Hours",
    value: 432,
  },
];
