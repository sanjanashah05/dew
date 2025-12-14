import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-thin tracking-wider text-black dark:text-white hover:opacity-70 transition-opacity">
            DEW
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-black dark:bg-white px-5 py-2 text-sm font-medium text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
