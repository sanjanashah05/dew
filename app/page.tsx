import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="flex min-h-screen items-center justify-center px-6 pt-20">
        <main className="mx-auto max-w-5xl text-center">
          <h1 className="text-7xl font-thin tracking-wider text-black dark:text-white mb-6">
            DEW
          </h1>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl mx-auto leading-relaxed">
            Innovation Meets Excellence
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-12 max-w-xl mx-auto">
            Transform the way you work and live with cutting-edge solutions
            designed for the modern world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/signup"
              className="rounded-full bg-black dark:bg-white px-8 py-3 text-sm font-medium text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-zinc-300 dark:border-zinc-700 px-8 py-3 text-sm font-medium text-black dark:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}