import { useState } from 'react'
import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { useApp } from '../context/AppContext.jsx'
import { projects } from '../data/projects.js'

// Technologies proposées en filtre (doivent correspondre aux tags des projets)
const FILTERS = ['React', 'Next.js', 'Angular', 'TypeScript', 'Java', 'Python', 'PHP', 'VBA']

export default function Projects() {
  const { ui } = useApp()
  const [filter, setFilter] = useState('all')

  // Les projets « featured » d'abord, puis filtrage par tag
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))
  const visible =
    filter === 'all' ? sorted : sorted.filter((p) => p.tags.includes(filter))

  return (
    <Section id="projects" title={ui.projects.title} subtitle={ui.projects.subtitle}>
      {/* Filtres par technologie */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {['all', ...FILTERS].map((f) => {
          const isActive = filter === f
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 active:scale-95 ${
                isActive
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                  : 'border border-slate-300 text-slate-600 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-400'
              }`}
            >
              {f === 'all' ? ui.projects.filterAll : f}
            </button>
          )
        })}
      </div>

      {/* key={filter} relance l'animation en cascade à chaque filtrage */}
      <div key={filter} className="stagger-fade grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
