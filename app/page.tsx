import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen items-center justify-center px-6 pt-20">
        <main className="mx-auto max-w-5xl text-center">
          <h1 className="text-7xl font-thin tracking-wider text-brown-dark mb-6">
            DEW
          </h1>
          <p className="text-2xl text-brown-medium mb-4 max-w-2xl mx-auto leading-relaxed">
            Innovation Meets Excellence
          </p>
          <p className="text-lg text-beige-dark mb-12 max-w-xl mx-auto">
            Transform the way you work and live with cutting-edge solutions
            designed for the modern world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/signup"
              className="rounded-full bg-pink-dark px-8 py-3 text-sm font-medium text-white hover:bg-pink-dark/90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-brown-light px-8 py-3 text-sm font-medium text-brown-dark hover:bg-pink-light transition-colors"
            >
              Learn More
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}