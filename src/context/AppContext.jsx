import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { ui } from '../data/ui.js'

const AppContext = createContext(null)

// Récupère la préférence sauvegardée ou celle du navigateur
function getInitialLang() {
  if (typeof window === 'undefined') return 'fr'
  const saved = localStorage.getItem('lang')
  if (saved === 'fr' || saved === 'en') return saved
  return navigator.language?.startsWith('en') ? 'en' : 'fr'
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function AppProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)
  const [theme, setTheme] = useState(getInitialTheme)

  // Applique la langue : sauvegarde + attribut <html lang>
  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  // Applique le thème : classe .dark sur <html> + sauvegarde
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleLang = useCallback(() => {
    setLang((l) => (l === 'fr' ? 'en' : 'fr'))
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  // Helper : récupère le bon texte selon la langue { fr, en }
  const t = useCallback((obj) => (obj && typeof obj === 'object' ? obj[lang] : obj), [lang])

  const value = {
    lang,
    theme,
    toggleLang,
    toggleTheme,
    t,
    ui: ui[lang],
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp doit être utilisé dans un <AppProvider>')
  return ctx
}
