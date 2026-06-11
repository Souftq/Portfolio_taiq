import { ArrowDown, FileDown, Mail } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { profile } from '../data/profile.js'
import Socials from './Socials.jsx'
import Terminal from './Terminal.jsx'
import ParticlesBackground from './ParticlesBackground.jsx'

export default function Hero() {
  const { ui, t } = useApp()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Décor d'arrière-plan — halos animés + particules interactives */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float-slow absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/20" />
        <div className="animate-float-slower absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl dark:bg-brand-700/10" />
        <ParticlesBackground />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-28 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
            {ui.hero.greeting} 👋
          </p>

          <h1 className="animated-gradient-text text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            {profile.name}
          </h1>

          <h2 className="mt-3 text-2xl font-bold text-slate-700 sm:text-3xl dark:text-slate-200">
            {t(profile.role)}
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {t(profile.tagline)}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 hover:shadow-brand-600/40"
            >
              {ui.hero.cta}
              <ArrowDown size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-400"
            >
              <Mail size={18} />
              {ui.hero.contact}
            </a>

            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-2 py-3 font-semibold text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              >
                <FileDown size={18} />
                {ui.hero.resume}
              </a>
            )}
          </div>

          <Socials className="mt-9" includeEmail />
        </div>

        {/* Terminal animé — visible à partir des écrans lg */}
        <div className="hidden justify-center lg:flex">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
