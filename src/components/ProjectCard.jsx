import { useState } from 'react'
import { Github, ExternalLink, Star, Images, Play } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import Lightbox from './Lightbox.jsx'

export default function ProjectCard({ project }) {
  const { ui, t } = useApp()
  const [lightbox, setLightbox] = useState(false)
  const [coverError, setCoverError] = useState(false)

  // Construit la liste des médias : vidéo (optionnelle) en premier, puis les images.
  // Supporte `images: []` (galerie) et l'ancien `image: ''` (image unique).
  const images = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : []
  const media = [
    ...(project.video ? [{ type: 'video', src: project.video }] : []),
    ...images.map((src) => ({ type: 'image', src })),
  ]
  const cover = media[0]

  // Étiquette affichée au survol de la couverture
  const hoverLabel = project.video
    ? images.length
      ? `Vidéo + ${images.length} captures`
      : 'Vidéo'
    : images.length > 1
      ? `${images.length} captures`
      : '1 capture'

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700">
      {/* Visuel : couverture cliquable (image ou vidéo), sinon dégradé */}
      {cover && !coverError ? (
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="relative block h-44 cursor-zoom-in overflow-hidden"
          aria-label={`Voir les médias de ${t(project.title)}`}
        >
          {cover.type === 'video' ? (
            <video
              src={cover.src}
              autoPlay
              loop
              muted
              playsInline
              onError={() => setCoverError(true)}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <img
              src={cover.src}
              alt={t(project.title)}
              loading="lazy"
              onError={() => setCoverError(true)}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          )}
          {/* Voile + indication au survol */}
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
            <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 opacity-0 transition group-hover:opacity-100">
              {project.video ? <Play size={14} className="fill-current" /> : <Images size={14} />}
              {hoverLabel}
            </span>
          </span>
          {project.featured && <FeaturedBadge label={ui.projects.featured} />}
        </button>
      ) : (
        <div className="relative flex h-44 w-full items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700 text-5xl font-bold text-white/90">
          {t(project.title).charAt(0)}
          {project.featured && <FeaturedBadge label={ui.projects.featured} />}
        </div>
      )}

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

      {lightbox && (
        <Lightbox media={media} alt={t(project.title)} onClose={() => setLightbox(false)} />
      )}
    </article>
  )
}

function FeaturedBadge({ label }) {
  return (
    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-700 backdrop-blur dark:bg-slate-900/90 dark:text-brand-300">
      <Star size={12} className="fill-current" />
      {label}
    </span>
  )
}
