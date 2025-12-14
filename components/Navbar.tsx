function Navbar() {
  return (
    <nav className="mx-auto grid grid-cols-[auto_1fr_auto] mt-4 w-[90%] border px-8 py-2 rounded-md">
      <div>Logo</div>
      <ul className="flex items-center justify-center gap-10">
        <li>Home</li>
        <li>Courses</li>
        <li>Wishlist</li>
      </ul>
      <div>Account</div>
    </nav>
  );
}

export { Navbar };
