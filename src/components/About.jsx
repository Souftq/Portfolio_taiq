import { MapPin, Mail, Phone } from 'lucide-react'
import Section from './Section.jsx'
import { useApp } from '../context/AppContext.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  const { ui, t } = useApp()

  const infos = [
    { Icon: MapPin, value: t(profile.location) },
    { Icon: Mail, value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, value: profile.phone, href: `tel:${profile.phone}` },
  ].filter((i) => i.value)

  return (
    <Section id="about" title={ui.about.title}>
      <div className="grid items-center gap-12 md:grid-cols-5">
        {/* Avatar / initiales */}
        <div className="flex justify-center md:col-span-2">
          <div className="flex h-52 w-52 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 text-6xl font-bold text-white shadow-xl shadow-brand-600/20">
            {profile.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()}
          </div>
        </div>

        {/* Texte */}
        <div className="md:col-span-3">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t(profile.about)}
          </p>

          <ul className="mt-7 space-y-3">
            {infos.map(({ Icon, value, href }) => (
              <li key={value} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                  <Icon size={18} />
                </span>
                {href ? (
                  <a href={href} className="transition hover:text-brand-600 dark:hover:text-brand-400">
                    {value}
                  </a>
                ) : (
                  <span>{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
