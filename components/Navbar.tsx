import { HoverLink } from "@/components/HoverLink";

function Navbar() {
  return (
    <nav className="mx-auto grid grid-cols-[auto_1fr_auto] mt-4 w-[90%] border px-8 py-2 rounded-md">
      <div>Logo</div>
      <ul className="flex items-center justify-center gap-10">
        <HoverLink href="/">Home</HoverLink>
        <HoverLink href="/courses">Courses</HoverLink>
        <HoverLink href="/wishlist">Wishlist</HoverLink>
      </ul>
      <div>Account</div>
    </nav>
  );
}

export { Navbar };
