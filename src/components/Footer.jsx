import { useApp } from '../context/AppContext.jsx'
import { profile } from '../data/profile.js'

export default function Footer() {
  const { ui } = useApp()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center text-sm text-slate-500 sm:px-8 dark:text-slate-400">
        <p>
          © {year} {profile.name}. {ui.footer.rights}
        </p>
        <p className="text-xs">{ui.footer.builtWith}</p>
      </div>
    </footer>
  )
}
