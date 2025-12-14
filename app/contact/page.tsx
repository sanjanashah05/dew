export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-semibold text-black dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        <div className="rounded-2xl bg-white dark:bg-zinc-900 p-8 md:p-12 border border-zinc-200 dark:border-zinc-800">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-black px-4 py-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                  placeholder="John"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-black px-4 py-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                  placeholder="Doe"
                />
              </div>
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
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-black px-4 py-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-black px-4 py-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-black px-4 py-3 text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-black dark:bg-white py-3 text-sm font-medium text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
