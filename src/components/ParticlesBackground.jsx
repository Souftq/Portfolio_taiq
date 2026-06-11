import { useEffect, useRef } from 'react'
import { useApp } from '../context/AppContext.jsx'

// Fond de particules animées (canvas natif, sans dépendance) :
// points colorés qui dérivent, reliés entre eux quand ils sont proches,
// et attirés en douceur par le curseur.
const COLORS = ['#6366f1', '#818cf8', '#22d3ee', '#f59e0b', '#f87171', '#34d399']
const LINK_DIST = 130 // distance max pour relier deux particules
const MOUSE_DIST = 170 // rayon d'interaction du curseur

export default function ParticlesBackground() {
  const canvasRef = useRef(null)
  const { theme } = useApp()
  const themeRef = useRef(theme)
  themeRef.current = theme

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles = []
    let raf = 0
    let running = true
    const mouse = { x: -9999, y: -9999 }

    function resize() {
      const { width, height } = canvas.parentElement.getBoundingClientRect()
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // ~1 particule pour 16000 px², plafonné pour la perf
      const count = Math.min(90, Math.round((width * height) / 16000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.2 + Math.random() * 1.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    }

    function step() {
      if (!running) return
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      const dark = themeRef.current === 'dark'
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        // Attirance légère vers le curseur
        const dxm = mouse.x - p.x
        const dym = mouse.y - p.y
        const dm = Math.hypot(dxm, dym)
        if (dm < MOUSE_DIST && dm > 0.001) {
          p.vx += (dxm / dm) * 0.012
          p.vy += (dym / dm) * 0.012
        }
        // Limite la vitesse pour rester doux
        const speed = Math.hypot(p.vx, p.vy)
        if (speed > 0.6) {
          p.vx = (p.vx / speed) * 0.6
          p.vy = (p.vy / speed) * 0.6
        }
        p.x += p.vx
        p.y += p.vy
        // Rebouclage aux bords
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10
      }

      // Lignes entre particules proches
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * (dark ? 0.22 : 0.16)
            ctx.strokeStyle = dark
              ? `rgba(148, 163, 184, ${alpha})`
              : `rgba(71, 85, 105, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        // Ligne vers le curseur
        const p = particles[i]
        const dm = Math.hypot(mouse.x - p.x, mouse.y - p.y)
        if (dm < MOUSE_DIST) {
          const alpha = (1 - dm / MOUSE_DIST) * 0.3
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }

      // Points
      for (const p of particles) {
        ctx.globalAlpha = dark ? 0.9 : 0.7
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      raf = requestAnimationFrame(step)
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function onLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    // Pause l'animation quand le Hero n'est plus à l'écran (perf)
    const visObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true
        raf = requestAnimationFrame(step)
      } else if (!entry.isIntersecting) {
        running = false
        cancelAnimationFrame(raf)
      }
    })
    visObserver.observe(canvas)

    resize()
    raf = requestAnimationFrame(step)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      visObserver.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    />
  )
}
