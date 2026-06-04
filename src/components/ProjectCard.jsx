import { Github, ExternalLink, Star } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'

export default function ProjectCard({ project }) {
  const { ui, t } = useApp()

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700">
      {/* Visuel : image si fournie, sinon dégradé avec initiale */}
      <div className="relative h-44 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={t(project.title)}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700 text-5xl font-bold text-white/90">
            {t(project.title).charAt(0)}
          </div>
        )}
        {project.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-700 backdrop-blur dark:bg-slate-900/90 dark:text-brand-300">
            <Star size={12} className="fill-current" />
            {ui.projects.featured}
          </span>
        )}
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold">{t(project.title)}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {t(project.description)}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(project.github || project.demo) && (
          <div className="mt-5 flex gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              >
                <Github size={16} />
                {ui.projects.code}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              >
                <ExternalLink size={16} />
                {ui.projects.demo}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
