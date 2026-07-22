import { Code2, Smartphone, Globe, PenTool, GraduationCap, Rocket } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Custom software solutions for businesses of every size.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Android and cross-platform mobile applications.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Modern, responsive, SEO-friendly websites.',
  },
  {
    icon: PenTool,
    title: 'UI/UX & Graphic Design',
    description: 'Creative digital designs and branding solutions.',
  },
  {
    icon: GraduationCap,
    title: 'IT Training & Internships',
    description: 'Practical technology education and career-focused training.',
  },
  {
    icon: Rocket,
    title: 'Digital Solutions',
    description: 'Helping businesses grow through technology.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Our Services</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Everything Your Business Needs to Go Digital
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From custom software to hands-on training, we deliver end-to-end technology services.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-4 flex size-12 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
