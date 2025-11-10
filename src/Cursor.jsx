import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const haloRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dot = dotRef.current
    const halo = haloRef.current
    if (!dot || !halo) return

    let x = 0, y = 0, sx = 0, sy = 0
    let rafId

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate3d(${x}px, ${y}px,0)`
    }
    const loop = () => {
      sx += (x - sx) * 0.18
      sy += (y - sy) * 0.18
      halo.style.transform = `translate3d(${sx}px, ${sy}px,0)`
      rafId = requestAnimationFrame(loop)
    }

    if (!prefersReduced) rafId = requestAnimationFrame(loop)
    window.addEventListener('mousemove', move)

    const hoverOn = () => {
      dot.classList.add('cursor-active')
      halo.classList.add('cursor-active')
    }
    const hoverOff = () => {
      dot.classList.remove('cursor-active')
      halo.classList.remove('cursor-active')
    }
    const focusables = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-focus')
    focusables.forEach(el => {
      el.addEventListener('mouseenter', hoverOn)
      el.addEventListener('mouseleave', hoverOff)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(rafId)
      focusables.forEach(el => {
        el.removeEventListener('mouseenter', hoverOn)
        el.removeEventListener('mouseleave', hoverOff)
      })
    }
  }, [])

  return (
    <>
      <div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block">
        <div ref={haloRef} className="-translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--electric-blue)]/20 backdrop-blur-sm mix-blend-screen transition-all duration-150" />
      </div>
      <div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[101] hidden md:block">
        <div ref={dotRef} className="-translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[var(--electric-blue)] shadow-[0_0_12px_rgba(0,123,255,0.8)] transition-transform duration-150" />
      </div>
      <style>{`
        .cursor-active { filter: drop-shadow(0 0 12px rgba(0,123,255,.8)); }
      `}</style>
    </>
  )
}
