import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-7xl font-thin tracking-wider text-accent-strong mb-6">DEW</h1>
          <p className="text-2xl text-foreground mb-4 max-w-2xl mx-auto leading-relaxed">Innovation Meets Excellence</p>
          <p className="text-lg text-muted mb-12 max-w-xl mx-auto">Transform the way you work and live with cutting-edge solutions designed for the modern world.</p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/wars" className="block p-8 rounded-3xl border border-soft bg-card shadow-sm transform hover:scale-[1.02] transition">
              <h2 className="text-2xl font-serif font-medium text-accent-strong">War</h2>
              <p className="text-sm text-muted mt-2">Tactical overview and details.</p>
            </Link>

            <Link href="/analysis" className="block p-8 rounded-3xl border border-soft bg-card shadow-sm transform hover:scale-[1.02] transition">
              <h2 className="text-2xl font-serif font-medium text-foreground">Analysis</h2>
              <p className="text-sm text-muted mt-2">AI-driven insights and reports.</p>
            </Link>

            <Link href="/routine-builder" className="block p-8 rounded-3xl border border-soft bg-card shadow-sm transform hover:scale-[1.02] transition">
              <h2 className="text-2xl font-serif font-medium text-accent-strong">Routine Builder</h2>
              <p className="text-sm text-muted mt-2">Open the smart skincare routine builder.</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}