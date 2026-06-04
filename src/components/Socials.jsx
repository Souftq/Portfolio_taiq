import { Github, Linkedin, Twitter, Globe, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  website: Globe,
}

// Affiche les icônes des réseaux dont l'URL est renseignée dans profile.js
export default function Socials({ size = 20, className = '', includeEmail = false }) {
  const entries = Object.entries(profile.socials).filter(([, url]) => url)

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {entries.map(([key, url]) => {
        const Icon = iconMap[key] || Globe
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={key}
            className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
          >
            <Icon size={size} />
          </a>
        )
      })}
      {includeEmail && profile.email && (
        <a
          href={`mailto:${profile.email}`}
          aria-label="email"
          className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
        >
          <Mail size={size} />
        </a>
      )}
    </div>
  )
}
