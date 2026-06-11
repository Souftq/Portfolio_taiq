import { GraduationCap } from 'lucide-react'
import Section from './Section.jsx'
import { useApp } from '../context/AppContext.jsx'
import { education } from '../data/education.js'

export default function Education() {
  const { ui, t } = useApp()

  return (
    <Section
      id="education"
      title={ui.education.title}
      subtitle={ui.education.subtitle}
      className="bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="stagger mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
              <GraduationCap size={22} />
            </span>
            <div>
              <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                {edu.period}
              </span>
              <h3 className="mt-0.5 font-bold leading-snug">{t(edu.degree)}</h3>
              {edu.school && (
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{edu.school}</p>
              )}
              {t(edu.note) && (
                <span className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {t(edu.note)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
