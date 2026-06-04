import Section from './Section.jsx'
import { useApp } from '../context/AppContext.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  const { ui, t } = useApp()

  return (
    <Section
      id="skills"
      title={ui.skills.title}
      subtitle={ui.skills.subtitle}
      className="bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div
            key={t(group.category)}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
          >
            <h3 className="mb-4 font-semibold text-brand-600 dark:text-brand-400">
              {t(group.category)}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
