"use client"

import React from 'react'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left: Login form */}
        <section className="flex items-center justify-center p-8 h-screen">
          <div className="w-full max-w-md mx-auto bg-card p-8 rounded-2xl border border-soft shadow-sm">
            <h2 className="text-2xl font-sans font-semibold text-foreground mb-4">Welcome back</h2>
            <p className="text-sm text-muted mb-6">Log in to continue to your account.</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-muted mb-1">Email</label>
                <input type="email" className="w-full p-3 input" placeholder="you@example.com" />
              </div>

              <div>
                <label className="block text-sm text-muted mb-1">Password</label>
                <input type="password" className="w-full p-3 input" placeholder="Your password" />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-muted"><input type="checkbox" /> Remember me</label>
                <Link href="#" className="text-sm text-accent-strong">Forgot?</Link>
              </div>

              <div>
                <button className="w-full btn-primary py-3 rounded-lg">Log in</button>
              </div>
            </form>

            <p className="text-sm text-muted mt-4">Don’t have an account? <Link href="/signup" className="text-accent-strong">Sign up</Link></p>
          </div>
        </section>

        {/* Right: Image (full-height). Place your image in `public/` as `login-skin.jpg` */}
        <section className="hidden md:block relative h-screen">
          <img src="/login.jpeg" alt="Healthy skin" className="absolute inset-0 w-full h-full object-cover" />
        </section>
      </div>
    </main>
  )
}