import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#how', label: 'How it works' },
    { href: '#packs', label: 'Packs' },
    { href: '#cases', label: 'Case Studies' },
    { href: '#why', label: 'Why us' },
    { href: '#pricing', label: 'Pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(15,23,36,0.5)] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[var(--electric-blue)]/15 grid place-items-center border border-[var(--electric-blue)]/40">
            <span className="text-[var(--electric-blue)] font-black">B</span>
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-tight">Blue Print</div>
            <div className="text-xs text-white/60 -mt-0.5">Design your future</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-white/80 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--electric-blue)] text-white font-semibold shadow-[0_0_0_0_rgba(0,123,255,0.0)] hover:shadow-[0_10px_30px_-12px_rgba(0,123,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
            Get a free audit
          </a>
        </nav>

        <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4">
          <div className="grid py-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="py-2 text-white/80 hover:text-white">
                {n.label}
              </a>
            ))}
            <a href="#cta" className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--electric-blue)] text-white font-semibold">
              Get a free audit
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
