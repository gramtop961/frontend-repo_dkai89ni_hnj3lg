import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Portfolio',
    description: 'A playful 3D-enhanced portfolio with immersive interactions and buttery-smooth performance.',
    tags: ['React', 'Spline', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Design System Kit',
    description: 'A reusable component library with tokens, themes, and accessibility baked-in.',
    tags: ['React', 'Storybook', 'Radix UI'],
    live: '#',
    repo: '#',
  },
  {
    title: 'AI Writing Assistant',
    description: 'Context-aware drafting and editing tool powered by modern AI APIs.',
    tags: ['FastAPI', 'OpenAI', 'MongoDB'],
    live: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-3 text-gray-600">Selected work showcasing thoughtful UX, clean code, and modern aesthetics.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-gray-100 bg-gray-50 px-4 py-3">
                <a href={p.live} className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-2 text-sm text-gray-700 hover:underline">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
