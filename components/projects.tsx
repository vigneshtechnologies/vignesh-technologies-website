import { Smartphone, Globe, Cpu } from 'lucide-react'

const projects = [
  {
    icon: Smartphone,
    title: 'Circular App',
    category: 'Mobile Community Platform',
    description:
      'A local community app connecting people, businesses, events, and updates in one place.',
  },
  {
    icon: Globe,
    title: 'Web Development Projects',
    category: 'Modern Business Websites',
    description:
      'Responsive, SEO-friendly websites built for businesses to establish a strong online presence.',
  },
  {
    icon: Cpu,
    title: 'Technology Projects',
    category: 'Innovative Digital Solutions',
    description:
      'Custom digital solutions that solve real problems and help organizations work smarter.',
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Our Work</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Projects We Are Proud Of
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A glimpse of the products and solutions we have delivered.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-4 flex size-12 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                <project.icon className="size-6" aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {project.category}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-navy">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
