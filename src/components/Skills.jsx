import {
  Database,
  Brain,
  FileSpreadsheet,
  Boxes,
  Binary,
  Users,
  MessagesSquare,
  Clock,
  RefreshCw,
  HeartHandshake,
} from 'lucide-react'
import Section from './Section.jsx'
import { useApp } from '../context/AppContext.jsx'
import { skills } from '../data/profile.js'

// Icônes Lucide utilisées pour les items sans logo Devicon
const lucideMap = {
  Database,
  Brain,
  FileSpreadsheet,
  Boxes,
  Binary,
  Users,
  MessagesSquare,
  Clock,
  RefreshCw,
  HeartHandshake,
}

export default function Skills() {
  const { ui, t } = useApp()

  return (
    <Section
      id="skills"
      title={ui.skills.title}
      subtitle={ui.skills.subtitle}
      className="bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={t(group.category)}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-brand-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
          >
            <h3 className="mb-5 font-semibold text-brand-600 dark:text-brand-400">
              {t(group.category)}
            </h3>
            <ul className="grid grid-cols-3 gap-2">
              {group.items.map((item) => {
                const name = t(item.name)
                const LucideIcon = item.lucide ? lucideMap[item.lucide] : null
                return (
                  <li
                    key={name}
                    className="group/tile flex flex-col items-center gap-2 rounded-xl px-1 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 dark:hover:bg-slate-800/70"
                    title={name}
                  >
                    {LucideIcon ? (
                      <LucideIcon
                        size={34}
                        strokeWidth={1.6}
                        className="text-brand-500 transition-transform duration-300 group-hover/tile:scale-110 dark:text-brand-400"
                      />
                    ) : (
                      <img
                        src={item.icon}
                        alt=""
                        loading="lazy"
                        className={`h-[34px] w-[34px] transition-transform duration-300 group-hover/tile:scale-110 ${
                          item.invertDark ? 'dark:invert' : ''
                        }`}
                      />
                    )}
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      {name}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
