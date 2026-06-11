import { useEffect, useMemo, useState } from 'react'
import { useApp } from '../context/AppContext.jsx'

const TYPE_SPEED = 65 // ms par caractère tapé
const LINE_PAUSE = 450 // pause après l'affichage d'une réponse

// Terminal animé du Hero : "tape" des commandes et affiche les réponses,
// avec un curseur clignotant. Re-démarre quand on change de langue.
export default function Terminal() {
  const { lang } = useApp()

  const lines = useMemo(
    () =>
      lang === 'fr'
        ? [
            { cmd: 'whoami', out: 'Soufiane Taiq' },
            { cmd: 'role', out: 'Étudiant ingénieur en informatique' },
            { cmd: 'education', out: 'ENSIM — Le Mans' },
            { cmd: 'status', out: "Recherche active d'une alternance " },
          ]
        : [
            { cmd: 'whoami', out: 'Soufiane Taiq' },
            { cmd: 'role', out: 'Software Engineering Student' },
            { cmd: 'education', out: 'ENSIM — Le Mans, France' },
            { cmd: 'status', out: 'Looking for an apprenticeship ' },
          ],
    [lang],
  )

  // Progression : index de ligne en cours + nb de caractères tapés
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [showOut, setShowOut] = useState(false)

  // Redémarre l'animation au changement de langue
  useEffect(() => {
    setLineIdx(0)
    setCharIdx(0)
    setShowOut(false)
  }, [lang])

  useEffect(() => {
    // Accessibilité : pas d'animation si l'utilisateur la refuse
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLineIdx(lines.length)
      return
    }
    if (lineIdx >= lines.length) return

    const current = lines[lineIdx]
    let timer

    if (charIdx < current.cmd.length) {
      timer = setTimeout(() => setCharIdx((c) => c + 1), TYPE_SPEED)
    } else if (!showOut) {
      timer = setTimeout(() => setShowOut(true), 250)
    } else {
      timer = setTimeout(() => {
        setLineIdx((l) => l + 1)
        setCharIdx(0)
        setShowOut(false)
      }, LINE_PAUSE)
    }
    return () => clearTimeout(timer)
  }, [lineIdx, charIdx, showOut, lines])

  const done = lineIdx >= lines.length

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 font-mono text-sm shadow-2xl shadow-slate-900/40 dark:border-slate-700 dark:shadow-black/40">
      {/* Barre de titre façon macOS */}
      <div className="flex items-center gap-2 border-b border-slate-700/60 bg-slate-800/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-3 select-none text-xs text-slate-400">
          soufiane@portfolio: ~
        </span>
      </div>

      {/* Contenu */}
      <div className="min-h-[16rem] space-y-3 p-5 leading-relaxed">
        {lines.slice(0, done ? lines.length : lineIdx + 1).map((line, i) => {
          const isCurrent = !done && i === lineIdx
          const typedCmd = isCurrent ? line.cmd.slice(0, charIdx) : line.cmd
          const outVisible = !isCurrent || showOut
          return (
            <div key={`${lang}-${i}`}>
              <p className="text-slate-300">
                <span className="select-none text-emerald-400">$ </span>
                {typedCmd}
                {isCurrent && !showOut && <Cursor />}
              </p>
              {outVisible && (
                <p className="text-slate-400">
                  {line.out}
                  {isCurrent && showOut && <Cursor />}
                </p>
              )}
            </div>
          )
        })}
        {done && (
          <p className="text-slate-300">
            <span className="select-none text-emerald-400">$ </span>
            <Cursor />
          </p>
        )}
      </div>
    </div>
  )
}

function Cursor() {
  return (
    <span className="animate-cursor-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-emerald-400" />
  )
}
