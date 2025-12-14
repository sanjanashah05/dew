import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-3xl font-bold mb-8 tracking-tight text-[#7A3940]">Skincare AI Hub</h1>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/wars" className="block p-8 rounded-3xl border border-[#F3E6E8] bg-white/70 shadow-sm transform hover:scale-[1.02] transition">
          <h2 className="text-2xl font-serif font-medium text-[#A42A3A]">War</h2>
          <p className="text-sm text-[#7A5E53] mt-2">Tactical overview and details.</p>
        </Link>

        <Link href="/analysis" className="block p-8 rounded-3xl border border-[#ECE6E0] bg-white/70 shadow-sm transform hover:scale-[1.02] transition">
          <h2 className="text-2xl font-serif font-medium text-[#8E5D4A]">Analysis</h2>
          <p className="text-sm text-[#7A5E53] mt-2">AI-driven insights and reports.</p>
        </Link>

        <Link href="/routine-builder" className="block p-8 rounded-3xl border border-[#F5E9E9] bg-white/70 shadow-sm transform hover:scale-[1.02] transition">
          <h2 className="text-2xl font-serif font-medium text-[#9F2A3A]">Routine Builder</h2>
          <p className="text-sm text-[#7A5E53] mt-2">Open the smart skincare routine builder.</p>
        </Link>
      </div>
    </main>
  )
}