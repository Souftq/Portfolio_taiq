import { Briefcase, MapPin } from 'lucide-react'
import Section from './Section.jsx'
import { useApp } from '../context/AppContext.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  const { ui, t } = useApp()

  return (
    <Section id="experience" title={ui.experience.title} subtitle={ui.experience.subtitle}>
      <div className="relative mx-auto max-w-3xl">
        {/* Ligne verticale de la timeline */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 sm:left-1/2 dark:bg-slate-800" />

        <div className="space-y-10">
          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0 ? 'sm:ml-auto sm:pl-10' : 'sm:pr-10 sm:text-right'
              }`}
            >
              {/* Point */}
              <span
                className={`absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-500 ring-4 ring-white dark:ring-slate-950 ${
                  i % 2 === 0 ? 'sm:-left-px' : 'sm:left-auto sm:-right-px sm:translate-x-1/2'
                }`}
              />

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                  <Briefcase size={12} />
                  {exp.period}
                </span>
                <h3 className="mt-3 text-lg font-bold">{t(exp.role)}</h3>
                <p className="font-medium text-slate-700 dark:text-slate-200">{exp.company}</p>
                {t(exp.location) && (
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                    <MapPin size={14} />
                    {t(exp.location)}
                  </p>
                )}
                <ul className="mt-4 space-y-2">
                  {t(exp.bullets).map((b, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
