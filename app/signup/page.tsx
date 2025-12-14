"use client"

import React from 'react'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left: Image (full-height). Place your image in `public/` as `signup-skin.jpg` */}
        <section className="hidden md:block relative h-screen">
          <img src="/signup.jpeg" alt="Healthy skin" className="absolute inset-0 w-full h-full object-cover" />
        </section>

        {/* Right: Signup form */}
        <section className="flex items-center justify-center p-8 h-screen">
          <div className="w-full max-w-md mx-auto bg-card p-8 rounded-2xl border border-soft shadow-sm">
            <h2 className="text-2xl font-sans font-semibold text-foreground mb-4">Create account</h2>
            <p className="text-sm text-muted mb-6">Start your journey to better skin.</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-muted mb-1">Full name</label>
                <input type="text" className="w-full p-3 input" placeholder="Your name" />
              </div>

              <div>
                <label className="block text-sm text-muted mb-1">Email</label>
                <input type="email" className="w-full p-3 input" placeholder="you@example.com" />
              </div>

              <div>
                <label className="block text-sm text-muted mb-1">Password</label>
                <input type="password" className="w-full p-3 input" placeholder="Create a password" />
              </div>

              <div>
                <button className="w-full btn-primary py-3 rounded-lg">Sign up</button>
              </div>
            </form>

            <p className="text-sm text-muted mt-4">Already have an account? <Link href="/login" className="text-accent-strong">Log in</Link></p>
          </div>
        </section>
      </div>
    </main>
  )
}
