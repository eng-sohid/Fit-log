import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          FITLOG
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium hover:underline">
            Workout
          </Link>

          <Link href="/my-plan" className="text-sm font-medium hover:underline">
            My Plan
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4">
          <Link href="/my-plan" className="text-sm font-medium">
            Plan <span>0</span>
          </Link>

          <Link href="/my-plan" className="text-sm font-medium">
            Saved <span>0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
