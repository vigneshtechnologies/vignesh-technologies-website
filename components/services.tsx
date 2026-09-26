import Link from 'next/link'
import {
  Code2,
  Globe,
  Smartphone,
  Layout,
  Palette,
  Cpu,
  Sparkles,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    category: 'Build',
    description:
      'Custom software architectures and business applications built to automate internal operations, simplify workflows, and scale with organizational needs.',
    tags: ['Business Logic', 'Automation', 'System Design'],
  },
  {
    icon: Globe,
    title: 'Website Development',
    category: 'Build',
    description:
      'Modern, high-performance websites and web applications built with Next.js, React, and TypeScript. Optimized for speed, search visibility, and seamless mobile responsiveness.',
    tags: ['Next.js', 'React', 'TypeScript', 'SEO'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    category: 'Build',
    description:
      'Native Android applications engineered with robust performance, intuitive user experience, and real-time connectivity to cloud services.',
    tags: ['Android', 'App Architecture', 'User Experience'],
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    category: 'Design',
    description:
      'User-centric wireframes, interactive prototypes, and modern interface designs that ensure intuitive user journeys across digital products.',
    tags: ['Interface Design', 'User Flows', 'Prototyping'],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    category: 'Design',
    description:
      'Visual identities, corporate branding materials, vector graphics, and promotional digital assets that create a cohesive and professional identity.',
    tags: ['Brand Identity', 'Marketing Graphics', 'Vector Art'],
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    category: 'Innovate',
    description:
      'Practical artificial intelligence integrations, automated data processing, and intelligent assistants implemented with Python to streamline repetitive operations.',
    tags: ['Python', 'Intelligent Workflows', 'Automation'],
  },
  {
    icon: Sparkles,
    title: 'Digital Solutions',
    category: 'Innovate',
    description:
      'End-to-end digital transformation consulting, helping businesses modernize legacy practices, adopt digital channels, and optimize operational efficiency.',
    tags: ['Digital Strategy', 'Operational Tools', 'Consulting'],
  },
  {
    icon: GraduationCap,
    title: 'IT Training',
    category: 'Learn',
    description:
      'Structured technical education spanning core programming, modern web technologies, and software engineering principles taught through practical hands-on exercises.',
    tags: ['Practical Labs', 'Foundational Code', 'Hands-on Exercises'],
  },
  {
    icon: Briefcase,
    title: 'Internship & Skill Development',
    category: 'Learn',
    description:
      'Project-centric skill development programs for college students and graduates, providing exposure to real software workflows, collaborative coding, and engineering standards.',
    tags: ['Project Practice', 'Technical Literacy', 'Applied Skills'],
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-secondary/40 py-16 md:py-24 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
            Our Core Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl text-balance">
            Comprehensive Technology Services for Modern Businesses
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            From bespoke software engineering and modern web applications to creative digital branding and technical workforce training, we provide end-to-end solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-2.5 py-1 rounded-md">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h3 className="text-lg font-bold text-navy">Looking for a custom technology solution?</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Discuss your project requirements directly with our technical team in Rajapalayam.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 transition-colors shrink-0"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
