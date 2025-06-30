import React, { ReactNode } from 'react'
import Link from 'next/link'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd text-white">
      <header className="flex justify-between items-center p-6 bg-black bg-opacity-30 backdrop-blur-md shadow-lg">
        <Link href="/">
          <a className="text-3xl font-extrabold tracking-wide hover:text-secondaryGradientEnd transition">
            CreatorPilot
          </a>
        </Link>
        <nav className="space-x-6 text-lg font-semibold">
          <Link href="/dashboard"><a className="hover:text-secondaryGradientEnd transition">Dashboard</a></Link>
          <Link href="/analyze"><a className="hover:text-secondaryGradientEnd transition">Analyze</a></Link>
          <Link href="/thumbnail"><a className="hover:text-secondaryGradientEnd transition">Thumbnail</a></Link>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-8">
        {children}
      </main>

      <footer className="text-center p-6 bg-black bg-opacity-20 text-white/70">
        © 2025 CreatorPilot. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  )
}
