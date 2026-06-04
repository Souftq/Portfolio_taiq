import { Mail } from 'lucide-react'
import Section from './Section.jsx'
import Socials from './Socials.jsx'
import { useApp } from '../context/AppContext.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const { ui } = useApp()

  return (
    <Section
      id="contact"
      title={ui.contact.title}
      subtitle={ui.contact.subtitle}
      className="bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
        >
          <Mail size={18} />
          {ui.contact.emailMe}
        </a>

        <p className="mt-4 text-slate-500 dark:text-slate-400">{profile.email}</p>

        <Socials className="mt-8" includeEmail={false} />
      </div>
    </Section>
  )
}
