import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-pink-light">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-thin tracking-wider text-brown-dark hover:text-pink-dark transition-colors">
            DEW
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm font-medium text-brown-medium hover:text-brown-dark transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-brown-medium hover:text-brown-dark transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-brown-medium hover:text-brown-dark transition-colors"
            >
              Contact Us
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-medium text-brown-medium hover:text-brown-dark transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-pink-dark px-5 py-2 text-sm font-medium text-white hover:bg-pink-dark/90 transition-colors"
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
