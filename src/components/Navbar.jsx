import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, Languages } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { profile } from '../data/profile.js'

const SECTION_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']

export default function Navbar() {
  const { ui, lang, theme, toggleLang, toggleTheme } = useApp()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy : met en surbrillance le lien de la section visible
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        // Garde la section la plus visible à l'écran
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const links = [
    { href: '#home', id: 'home', label: ui.nav.home },
    { href: '#about', id: 'about', label: ui.nav.about },
    { href: '#skills', id: 'skills', label: ui.nav.skills },
    { href: '#experience', id: 'experience', label: ui.nav.experience },
    { href: '#projects', id: 'projects', label: ui.nav.projects },
    { href: '#education', id: 'education', label: ui.nav.education },
    { href: '#contact', id: 'contact', label: ui.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/85'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-lg font-bold tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-brand-500">.</span>
        </a>

        {/* Liens desktop — soulignement animé + lien actif */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.id ? 'page' : undefined}
                className={`group relative py-2 text-sm font-medium transition-colors ${
                  active === l.id
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400'
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-500 transition-transform duration-300 ${
                    active === l.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 active:scale-95 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Changer de langue"
            title="FR / EN"
          >
            <Languages size={18} />
            <span className="uppercase">{lang}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 active:scale-95 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Changer de thème"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 active:scale-95 md:hidden dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile — hauteur animée pour une ouverture fluide */}
      <div
        className={`grid overflow-hidden border-slate-200 bg-white/95 backdrop-blur-md transition-[grid-template-rows,border-width] duration-300 ease-out md:hidden dark:border-slate-800 dark:bg-slate-950/95 ${
          open ? 'grid-rows-[1fr] border-t' : 'grid-rows-[0fr] border-t-0'
        }`}
      >
        <ul className="min-h-0 space-y-1 overflow-hidden px-5 py-1">
          {links.map((l, i) => (
            <li
              key={l.href}
              className={`transition-all duration-300 ${
                open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${60 + i * 35}ms` : '0ms' }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                  active === l.id
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pb-2" />
        </ul>
      </div>
    </header>
  )
}
