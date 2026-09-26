import Link from 'next/link'
import {
  Smartphone,
  QrCode,
  Globe,
  ExternalLink,
  Layers,
  ArrowRight,
} from 'lucide-react'

const projects = [
  {
    icon: Smartphone,
    title: 'Circular — Local Social & Business Platform',
    category: 'Flagship Product',
    status: 'Live & In Active Development',
    description:
      'A comprehensive hyperlocal platform connecting neighborhood residents, local retail businesses, community events, and neighborhood job listings across Android and web applications.',
    technologies: ['Next.js', 'TypeScript', 'Android', 'REST APIs', 'Cloud Infrastructure'],
    link: 'https://circularapp.in/',
    linkText: 'Explore Platform',
    isExternal: true,
  },
  {
    icon: QrCode,
    title: 'Smart School QR Attendance & Management System',
    category: 'Enterprise Solution',
    status: 'Operational System',
    description:
      'A digital attendance and student administration solution utilizing dynamic QR identification to streamline student entry tracking, record logging, and administrative reporting for educational institutions.',
    technologies: ['QR Verification', 'Student Management', 'Reporting Dashboards', 'Web Application'],
    link: '#contact',
    linkText: 'Inquire About Solution',
    isExternal: false,
  },
  {
    icon: Globe,
    title: 'Custom Corporate Web Portals & Platforms',
    category: 'Client Solutions',
    status: 'Delivered Projects',
    description:
      'Responsive, SEO-structured web architectures and digital portals built for businesses seeking a solid online presence, digital catalogs, customer contact channels, and workflow management.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Semantic SEO'],
    link: '#contact',
    linkText: 'Discuss a Web Project',
    isExternal: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border/80">
          <div className="max-w-2xl">
            <p className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Engineering Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl text-balance">
              Solutions &amp; Software We Have Built
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              A selection of authentic software products, digital systems, and custom applications engineered by Vignesh Technologies.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            <span>Start a New Project With Us</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div>
                {/* Header with icon and category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-navy text-white">
                    <project.icon className="size-5.5" />
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-navy">
                    {project.category}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="inline-block text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    ● {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy leading-snug">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border/70">
                <div className="mb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Core Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.isExternal ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline mt-2"
                  >
                    <span>{project.linkText}</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                ) : (
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline mt-2"
                  >
                    <span>{project.linkText}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
