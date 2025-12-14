import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-brown-dark mb-2">
            Welcome Back
          </h1>
          <p className="text-brown-medium">
            Login to your DEW account
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-brown-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-pink-light bg-pink-light/30 px-4 py-3 text-brown-dark focus:border-pink-dark focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-brown-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-lg border border-pink-light bg-pink-light/30 px-4 py-3 text-brown-dark focus:border-pink-dark focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-pink-dark py-3 text-sm font-medium text-white hover:bg-pink-dark/90 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-brown-medium">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-pink-dark hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
