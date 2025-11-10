import { motion, useReducedMotion } from 'framer-motion'

const ElectricB = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_25px_rgba(0,123,255,0.35)]">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#007BFF" />
        <stop offset="1" stopColor="#00D1FF" />
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="100" height="100" rx="20" stroke="url(#g)" strokeWidth="2" fill="rgba(255,255,255,0.02)" />
    <path d="M45 35h25a15 15 0 0 1 0 30H45zM45 65h28a16 16 0 0 1 0 32H45z" fill="url(#g)" opacity="0.25"/>
    <path d="M45 35h25a15 15 0 0 1 0 30H45z" stroke="url(#g)" strokeWidth="3"/>
    <path d="M45 65h28a16 16 0 0 1 0 32H45z" stroke="url(#g)" strokeWidth="3"/>
    <g opacity="0.3">
      {Array.from({length:8}).map((_,i)=> (
        <path key={i} d={`M${15+i*12} 10v100`} stroke="#ffffff0f" />
      ))}
      {Array.from({length:8}).map((_,i)=> (
        <path key={i} d={`M10 ${15+i*12}h100`} stroke="#ffffff0f" />
      ))}
    </g>
  </svg>
)

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[90svh] grid items-center py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(0,123,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0)), radial-gradient(1000px 300px at 80% 20%, rgba(0,209,255,0.08), transparent 60%)'}} />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-white/70 mb-5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
            First 3 clients — 20% off
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
            We build intelligent brands that actually sell.
          </h1>
          <p className="mt-5 text-white/70 text-lg max-w-2xl">
            Websites • AI Agents • Branding • Launch Campaigns — built end-to-end.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#cta" className="px-6 py-3 rounded-md bg-[var(--electric-blue)] text-white font-semibold shadow-[inset_0_0_0_0_rgba(255,255,255,0.0)] hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.08)] hover:-translate-y-1 active:translate-y-0 transition-all duration-200 cursor-focus">Get a free audit</a>
            <a href="#packs" className="px-6 py-3 rounded-md bg-white/10 text-white backdrop-blur-sm border border-white/15 hover:-translate-y-1 active:translate-y-0 transition-all duration-200">See pricing packs</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-white/60">
            <span className="text-sm">Trusted by</span>
            <div className="flex items-center gap-6 opacity-80">
              <div className="h-6 w-20 bg-white/10 rounded" />
              <div className="h-6 w-20 bg-white/10 rounded" />
              <div className="h-6 w-20 bg-white/10 rounded" />
            </div>
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.8, ease:[0.21,0.47,0.32,0.98]}}
            className="relative grid place-items-center"
          >
            <motion.div
              className="absolute -top-10 -right-6"
              initial={{rotate:0}}
              animate={reduce?{}:{rotate:360}}
              transition={{repeat:Infinity, duration:40, ease:'linear'}}
            >
              <ElectricB />
            </motion.div>

            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 rounded-2xl bg-[radial-gradient(40%_80%_at_50%_0%,rgba(0,123,255,0.35),transparent_60%)]" />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                <div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/5" />
                <div className="absolute inset-x-0 -bottom-8 mx-auto w-[70%] rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                  <div className="aspect-[9/19]" />
                </div>
                <div className="absolute left-3 top-3 right-3 h-10 rounded-md border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2 px-3">
                  <div className="w-4 h-4 rounded-full bg-[var(--electric-blue)]" />
                  <div className="text-white/80 text-sm">AI assistant: "Got questions? Ask me anything."</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
