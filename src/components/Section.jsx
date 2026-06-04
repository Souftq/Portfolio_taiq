import { useReveal } from '../hooks/useReveal.js'

// Conteneur de section : largeur max, padding, ancre, et animation au scroll
export default function Section({ id, title, subtitle, children, className = '' }) {
  const ref = useReveal()

  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div ref={ref} className="reveal mx-auto w-full max-w-6xl px-5 sm:px-8">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand-500" />
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
