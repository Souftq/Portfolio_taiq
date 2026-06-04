import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { useApp } from '../context/AppContext.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const { ui } = useApp()

  // Les projets « featured » d'abord
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))

  return (
    <Section id="projects" title={ui.projects.title} subtitle={ui.projects.subtitle}>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
