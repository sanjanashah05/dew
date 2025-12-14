import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-black dark:text-white mb-2">
            Create Account
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Join DEW today
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-black dark:bg-white py-3 text-sm font-medium text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-black dark:text-white hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
