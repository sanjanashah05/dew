'use client'

import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Sparkles, Sun, Moon } from 'lucide-react'
import { clsx } from 'clsx'

// --- 1. THE LOGIC (Unchanged) ---
type ProductType = 'cleanser' | 'toner' | 'vitamin_c' | 'retinol' | 'aha_bha' | 'moisturizer' | 'spf' | 'eye_cream' | 'oil'

interface Rule {
  label: string;
  step: number;
  times: ('am' | 'pm')[];
}

const SKINCARE_RULES: Record<ProductType, Rule> = {
  cleanser:    { label: 'Gentle Cleanser', step: 1, times: ['am', 'pm'] },
  toner:       { label: 'Hydrating Toner', step: 2, times: ['am', 'pm'] },
  vitamin_c:   { label: 'Vitamin C Serum', step: 3, times: ['am'] },
  aha_bha:     { label: 'Exfoliant (AHA)', step: 3, times: ['pm'] },
  retinol:     { label: 'Retinol Complex', step: 3, times: ['pm'] },
  eye_cream:   { label: 'Eye Cream',       step: 4, times: ['am', 'pm'] },
  moisturizer: { label: 'Moisturizer',     step: 5, times: ['am', 'pm'] },
  oil:         { label: 'Face Oil',        step: 6, times: ['pm'] },
  spf:         { label: 'Sunscreen SPF',   step: 7, times: ['am'] },
}

// --- 2. THE UI ---

export default function SmartRoutineGenerator() {
  const [inventory, setInventory] = useState<ProductType[]>([])
  const [routines, setRoutines] = useState<{ am: ProductType[], pm: ProductType[] }>({ am: [], pm: [] })

  useEffect(() => {
    const am: ProductType[] = []
    const pm: ProductType[] = []

    inventory.forEach((item) => {
      const rule = SKINCARE_RULES[item]
      if (rule.times.includes('am')) am.push(item)
      if (rule.times.includes('pm')) pm.push(item)
    })

    const sortByStep = (a: ProductType, b: ProductType) => SKINCARE_RULES[a].step - SKINCARE_RULES[b].step
    
    setRoutines({
      am: am.sort(sortByStep),
      pm: pm.sort(sortByStep)
    })
  }, [inventory])

  const addToInventory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const item = e.target.value as ProductType
    if (item && !inventory.includes(item)) {
      setInventory([...inventory, item])
    }
    e.target.value = ""
  }

  const removeFromInventory = (itemToRemove: ProductType) => {
    setInventory(inventory.filter(i => i !== itemToRemove))
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 font-sans">
      
      {/* --- INPUT SECTION (The Shelf) --- */}
      <div className="bg-[#FAF9F6] p-8 rounded-3xl shadow-sm border border-[#EBE5E0]">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h2 className="text-2xl font-serif font-medium text-[#5C4B43] flex items-center gap-2">
              <span className="bg-[#FFE4E6] p-2 rounded-full text-[#BE123C]"><Sparkles size={18} /></span>
              Your Collection
            </h2>
            <p className="text-[#8C7B75] mt-2 text-sm">What products do you have on your shelf?</p>
          </div>
          
          <div className="relative w-full md:w-72">
             <select 
                onChange={addToInventory}
                className="w-full p-4 bg-white border border-[#EBE5E0] rounded-2xl text-[#5C4B43] focus:outline-none focus:ring-2 focus:ring-[#FDA4AF] focus:border-transparent appearance-none cursor-pointer shadow-sm transition-all"
             >
                <option value="">+ Add Product</option>
                {Object.entries(SKINCARE_RULES).map(([key, rule]) => (
                   <option key={key} value={key} disabled={inventory.includes(key as ProductType)}>
                      {rule.label}
                   </option>
                ))}
             </select>
             <div className="absolute right-4 top-4.5 pointer-events-none text-[#A89890]">
                <Plus size={18} />
             </div>
          </div>
        </div>

        {/* Selected Tags */}
        <div className="flex flex-wrap gap-3 mt-6">
            {inventory.length === 0 && <span className="text-[#C4B5B0] text-sm italic pl-1">Shelf is empty... start adding!</span>}
            {inventory.map(item => (
                <span key={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#5C4B43] text-sm border border-[#EBE5E0] shadow-sm animate-in fade-in zoom-in duration-200">
                    {SKINCARE_RULES[item].label}
                    <button onClick={() => removeFromInventory(item)} className="hover:text-rose-500 transition-colors ml-1">
                        <Trash2 size={14} />
                    </button>
                </span>
            ))}
        </div>
      </div>

      {/* --- RESULTS SECTION --- */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Morning Routine (Rose Theme) */}
        <RoutineCard 
            title="Morning Ritual" 
            icon={<Sun size={20} className="text-rose-600" />}
            items={routines.am} 
            theme="rose"
            emptyMsg="Add products to see your AM order"
        />

        {/* Night Routine (Beige/Stone Theme) */}
        <RoutineCard 
            title="Night Ritual" 
            icon={<Moon size={20} className="text-[#8B7366]" />}
            items={routines.pm} 
            theme="beige"
            emptyMsg="Add products to see your PM order"
        />
        
      </div>
    </div>
  )
}

function RoutineCard({ title, icon, items, theme, emptyMsg }: any) {
    // Theme configurations
    const themes = {
        rose: {
            container: "bg-[#FFF1F2]/60 border-[#FECDD3]", // Rose 50/100
            title: "text-[#9F1239]", // Rose 900
            bubble: "bg-[#FFE4E6] text-[#BE123C]", // Rose 100/700
            text: "text-[#881337]" 
        },
        beige: {
            container: "bg-[#F5F5F4]/70 border-[#E7E5E4]", // Stone 50/100
            title: "text-[#57534E]", // Stone 600
            bubble: "bg-[#E7E5E4] text-[#57534E]", // Stone 200/600
            text: "text-[#44403C]"
        }
    }

    const t = theme === 'rose' ? themes.rose : themes.beige

    return (
        <div className={clsx("p-8 rounded-3xl border flex flex-col h-full min-h-[450px] transition-all", t.container)}>
            <div className="flex items-center gap-3 mb-8">
                <span className="p-2 bg-white rounded-full shadow-sm">{icon}</span>
                <h3 className={clsx("font-serif text-xl font-medium tracking-wide", t.title)}>{title}</h3>
                <span className="ml-auto text-[10px] font-bold tracking-widest uppercase text-black/20 bg-white/60 px-3 py-1 rounded-full">
                    {items.length} Steps
                </span>
            </div>

            <div className="space-y-4">
                {items.length === 0 && (
                    <div className="h-40 flex items-center justify-center text-black/30 italic text-sm">
                        {emptyMsg}
                    </div>
                )}
                {items.map((item: ProductType, index: number) => (
                    <div key={item} className="flex items-center gap-5 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 ease-out">
                        {/* Step Number Bubble */}
                        <div className={clsx("flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs", t.bubble)}>
                            {index + 1}
                        </div>
                        
                        <div className="flex-grow">
                            <p className={clsx("font-medium text-base", t.text)}>{SKINCARE_RULES[item].label}</p>
                            <p className="text-[10px] text-black/30 uppercase tracking-widest font-bold mt-0.5">Step {SKINCARE_RULES[item].step}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}