'use client'

import React, { useState } from 'react'
import { Swords, Search, Loader2 } from 'lucide-react'

// --- 1. THE DATA: Full List of Conflicts ---
const CONFLICTS = [
  {
    id: '1',
    ingA: 'Retinol',
    ingB: 'Vitamin C',
    reason: 'Retinol works best at a higher pH, while Vitamin C needs a low pH. Using them together can destabilize both and cause significant irritation. Use Vitamin C in the AM and Retinol in the PM.'
  },
  {
    id: '2',
    ingA: 'Retinol',
    ingB: 'AHA/BHA Acids',
    reason: 'Both are potent exfoliants that increase cell turnover. Combining them can destroy your skin barrier, leading to redness, dryness, and extreme sensitivity.'
  },
  {
    id: '3',
    ingA: 'Benzoyl Peroxide',
    ingB: 'Retinol',
    reason: 'Benzoyl Peroxide is an oxidizing agent that can effectively "cancel out" and degrade Retinol, making it useless. They can also be overly drying when combined.'
  },
  {
    id: '4',
    ingA: 'Vitamin C',
    ingB: 'Niacinamide',
    reason: 'Old research suggested they form niacin, causing temporary flushing. While modern formulas are more stable, they can still conflict at certain pH levels. It\'s safer to separate them.'
  },
  {
    id: '5',
    ingA: 'AHA/BHA Acids',
    ingB: 'Vitamin C',
    reason: 'Layering acids over an acidic Vitamin C serum can be too harsh for most skin types, leading to stinging and a compromised moisture barrier.'
  },
  {
    id: '6',
    ingA: 'Oil-Based Products',
    ingB: 'Water-Based Serums',
    reason: 'Not a dangerous reaction, but an absorption issue. Oils create a seal. If applied *before* water-based serums, the serums cannot penetrate the skin and will be ineffective.'
  },
]

// --- 2. THE COMPONENT ---
export default function WarPage() {
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setAnswer('')

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: query }),
      })
      const data = await res.json()
      setAnswer(data.answer)
    } catch (err) {
      setAnswer("Sorry, I couldn't reach the lab. Please try again.")
    } finally {
      setLoading(false)
    }
  }

    return (
    <main className="min-h-screen p-8 md:p-24 bg-surface">
      <div className="max-w-6xl mx-auto">
        
      {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4 flex items-center justify-center gap-3">
        <Swords className="text-accent-strong" size={40} />
        Ingredient Wars
        </h1>
          <p className="text-lg text-muted">
        Prevent chemical warfare on your face.
        </p>
      </div>

      {/* --- AI SEARCH SECTION --- */}
      <div className="mb-20 bg-card p-8 md:p-12 rounded-[2rem] border border-soft shadow-sm relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <label className="block text-accent-strong font-sans text-2xl font-medium mb-6 flex items-center justify-center gap-2">
            <Search size={24} />
            Check your specific combo
          </label>
                
          <form onSubmit={handleAsk} className="relative flex items-center shadow-md rounded-full">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., Can I mix Snail Mucin with Retinol?"
              className="w-full p-4 pl-6 pr-32 rounded-full border border-soft bg-card text-foreground focus:outline-none placeholder:text-muted text-lg"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="absolute right-2 top-2 bottom-2 btn-primary px-8 rounded-full font-medium transition-colors disabled:opacity-70 flex items-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : 'Ask'}
            </button>
          </form>

          {/* The AI Answer Box */}
          {answer && (
            <div className="mt-8 text-left bg-card bg-opacity-60 backdrop-blur-md p-6 rounded-2xl border border-white shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="flex gap-3">
                <div className="bg-accent-strong text-white p-2 h-fit rounded-lg shadow-sm">
                  <Swords size={18} />
                </div>
                <p className="text-foreground leading-relaxed font-medium pt-1">
                  {answer}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

        {/* --- CARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONFLICTS.map((conflict) => (
            <ConflictCard key={conflict.id} data={conflict} />
          ))}
        </div>
      </div>
    </main>
  )
}

// --- CARD COMPONENT ---
function ConflictCard({ data }: { data: any }) {
  return (
    <div className="bg-surface p-8 rounded-[2rem] border border-soft shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:border-accent hover:-translate-y-1">
      {/* The Swords Icon */}
      <div className="bg-accent p-5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
        <Swords className="text-accent-strong" size={32} strokeWidth={1.5} />
      </div>
      
      {/* The Combatants */}
      <h2 className="font-sans text-xl font-bold text-foreground mb-3 flex flex-col gap-1 w-full">
        <span className="pb-1 border-b border-transparent group-hover:border-accent transition-colors w-fit mx-auto">{data.ingA}</span>
        <span className="text-sm font-sans text-muted font-normal uppercase tracking-widest py-1">- vs -</span>
        <span className="pb-1 border-b border-transparent group-hover:border-accent transition-colors w-fit mx-auto">{data.ingB}</span>
      </h2>

      {/* The Reason Divider */}
      <div className="w-12 h-0.5 bg-divider my-4 group-hover:bg-accent transition-colors"></div>

      {/* The Explanation */}
      <p className="text-muted text-sm leading-relaxed">
        {data.reason}
      </p>
    </div>
  )
}