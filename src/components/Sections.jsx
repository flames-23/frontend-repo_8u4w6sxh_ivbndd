import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Bot, Zap, Gauge, Rocket, Sparkles, Star, Shield } from 'lucide-react'

const Section = ({ id, title, children, className = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <section id={id} ref={ref} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2 initial={{y:20, opacity:0}} animate={inView?{y:0, opacity:1}:{}} transition={{duration:0.6}} className="text-2xl md:text-3xl font-bold text-white mb-8">{title}</motion.h2>
        <motion.div initial={{opacity:0, y:20}} animate={inView?{opacity:1, y:0}:{}} transition={{duration:0.6, delay:0.1}}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  const steps = [
    { icon: <Gauge className="text-[var(--electric-blue)]"/>, title: 'Audit & Goals', text: 'Rapid audit + KPI targets in 48h.' },
    { icon: <Bot className="text-[var(--electric-blue)]"/>, title: 'Design + AI', text: 'Blueprint, UX, AI agent flows.' },
    { icon: <Rocket className="text-[var(--electric-blue)]"/>, title: 'Build & Launch', text: 'Site + automations + launch kit.' },
  ]
  return (
    <Section id="how" title="How it works">
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s,i)=> (
          <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 text-white/80 hover:bg-white/7 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[var(--electric-blue)]/15 grid place-items-center mb-4">{s.icon}</div>
            <div className="font-semibold text-white mb-1">{s.title}</div>
            <div className="text-sm">{s.text}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function ServicePacks() {
  const packs = [
    { name: 'Essentiel', price: '€500–€1.2k', bullets: ['1–3 pages', 'Basic AI bot', 'Launch kit'], cta: 'See packs' },
    { name: 'Croissance', price: '€1.2k–€2k', bullets: ['5–8 pages', 'Lead AI bot', 'SEO base'], cta: 'See packs' },
    { name: 'Premium', price: '€2k–€3k', bullets: ['10+ pages', 'Custom AI', 'Growth ops'], cta: 'See packs' },
  ]
  return (
    <Section id="packs" title="Services packs">
      <div className="grid md:grid-cols-3 gap-6">
        {packs.map((p,i)=> (
          <div key={p.name} className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white/80 transition-transform will-change-transform [transform-style:preserve-3d] hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(0,123,255,0.35)]">
            <div className="absolute right-4 -top-3 text-xs px-2 py-1 rounded-full bg-[var(--success)]/15 text-[var(--success)] border border-[var(--success)]/30">Service Card included — FREE</div>
            <div className="text-white text-lg font-semibold">{p.name}</div>
            <div className="text-white/60 text-sm">{p.price}</div>
            <div className="mt-4 space-y-2">
              {p.bullets.map(b => (
                <div key={b} className="flex items-center gap-2"><Check size={18} className="text-[var(--soft-cyan)]"/><span>{b}</span></div>
              ))}
            </div>
            <a href="#pricing" className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--electric-blue)] text-white font-semibold shadow hover:-translate-y-0.5 active:translate-y-0 transition-all">{p.cta}</a>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function CaseStudies() {
  return (
    <Section id="cases" title="Case Studies / Before–After">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4">
          <div className="aspect-[16/9] bg-gradient-to-tr from-white/10 to-white/5 rounded-lg relative">
            <input type="range" aria-label="Before after slider" className="absolute bottom-3 left-3 right-3" />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="inline-flex items-center gap-2 text-sm text-white/70"><span className="w-2.5 h-2.5 rounded-full bg-[var(--success)]"/> +70% traffic</div>
          <div className="inline-flex items-center gap-2 text-sm text-white/70"><span className="w-2.5 h-2.5 rounded-full bg-[var(--success)]"/> 2.3x leads</div>
          <div className="inline-flex items-center gap-2 text-sm text-white/70"><span className="w-2.5 h-2.5 rounded-full bg-[var(--success)]"/> +45% CR</div>
        </div>
      </div>
    </Section>
  )
}

export function AIDemo() {
  return (
    <Section id="ai" title="AI Agent demo">
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 text-white/80">
        <div className="text-white mb-3 font-medium">Chat</div>
        <div className="space-y-2 text-sm">
          <div className="max-w-[75%] rounded-lg bg-white/10 px-3 py-2">Can you audit my site and suggest 3 growth fixes?</div>
          <div className="max-w-[75%] rounded-lg bg-[var(--electric-blue)]/20 border border-[var(--electric-blue)]/40 px-3 py-2 ml-auto">Absolutely. Drop your URL. I’ll check speed, UX, SEO and funnels. Want results by tomorrow and a sample redesign?</div>
          <div className="rounded-lg bg-white/10 px-3 py-2">
            <div className="text-xs text-white/60 mb-1">Lead capture</div>
            <form className="grid md:grid-cols-3 gap-2">
              <input aria-label="Name" placeholder="Name" className="px-3 py-2 rounded-md bg-white/10 border border-white/15" />
              <input aria-label="Email" placeholder="Email" className="px-3 py-2 rounded-md bg-white/10 border border-white/15" />
              <button className="px-4 py-2 rounded-md bg-[var(--electric-blue)] text-white font-semibold">Send</button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  )
}

export function WhyUs() {
  const items = [
    { icon: <Zap />, title: 'Speed', text: 'Kickoff to MVP in ~2 weeks' },
    { icon: <Gauge />, title: 'ROI focus', text: 'KPIs and experiments' },
    { icon: <Bot />, title: 'AI-first', text: 'Agents, data, automations' },
    { icon: <Sparkles />, title: '50+ projects', text: 'Experience and craft' },
  ]
  return (
    <Section id="why" title="Why Blue Print">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(i => (
          <div key={i.title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80">
            <div className="w-10 h-10 rounded-lg bg-[var(--electric-blue)]/15 grid place-items-center mb-3 text-[var(--electric-blue)]">{i.icon}</div>
            <div className="text-white font-semibold mb-1">{i.title}</div>
            <div className="text-sm">{i.text}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function PricingRibbon() {
  return (
    <Section id="pricing" title="Pricing">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-6 text-white flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xl font-semibold">€500–€3000 — 3 packages</div>
          <div className="text-white/70 text-sm">Monthly retainers available</div>
        </div>
        <a href="#cta" className="px-5 py-2.5 rounded-md bg-[var(--electric-blue)] text-white font-semibold">Launch my project</a>
      </div>
    </Section>
  )
}

export function Testimonials() {
  return (
    <Section id="testimonials" title="Testimonials & logos">
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({length:3}).map((_,i)=> (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/80">
            <div className="flex items-center gap-1 text-[var(--electric-blue)] mb-2">
              {Array.from({length:5}).map((_,j)=> (<Star key={j} size={18}/>))}
            </div>
            <div className="italic">“They ship fast and it looks premium.”</div>
            <div className="text-sm text-white/60 mt-2">Founder, SaaS</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function FooterCTA() {
  return (
    <Section id="cta" title="Book a launch call">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
        <form className="grid md:grid-cols-3 gap-3">
          <input required placeholder="Name" className="px-3 py-2 rounded-md bg-white/10 border border-white/15" aria-label="Name" />
          <input required placeholder="Email" className="px-3 py-2 rounded-md bg-white/10 border border-white/15" aria-label="Email" />
          <button className="px-5 py-2.5 rounded-md bg-[var(--electric-blue)] text-white font-semibold">Book call</button>
        </form>
        <div className="text-xs text-white/60 mt-3">By booking you agree to our terms. All rights reserved. © Blue Print</div>
      </div>
    </Section>
  )
}
