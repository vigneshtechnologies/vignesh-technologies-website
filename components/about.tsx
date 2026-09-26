import Image from 'next/image'
import {
  Target,
  Eye,
  ShieldCheck,
  Code2,
  Workflow,
  Sparkles,
  MapPin,
  Laptop,
} from 'lucide-react'

const valueProps = [
  {
    icon: Code2,
    title: 'Practical Technology Solutions',
    description:
      'We engineer software and websites with clean architectures and clear business utility, avoiding over-engineering and unnecessary overhead.',
  },
  {
    icon: Workflow,
    title: 'Real Product Development Mindset',
    description:
      'Because we build and maintain our own platforms like Circular, we apply hands-on product lifecycle experience to every client project.',
  },
  {
    icon: Laptop,
    title: 'Modern Technology Skills',
    description:
      'Our development and training programs emphasize contemporary tools including Next.js, React, TypeScript, Python, and native Android.',
  },
  {
    icon: Target,
    title: 'Customer-Focused Delivery',
    description:
      'We work directly with businesses to understand operational requirements and deliver solutions that genuinely address their day-to-day challenges.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Technical Learning',
    description:
      'As both an engineering firm and an educational center, our team continuously explores emerging technologies to teach and implement modern practices.',
  },
  {
    icon: MapPin,
    title: 'Local Presence, Broader Digital Reach',
    description:
      'Rooted in Rajapalayam, Tamil Nadu, we provide accessible local support alongside digital engineering capabilities suitable for broader markets.',
  },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Company Story Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-lg">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-900">
                <Image
                  src="/images/about-office.png"
                  alt="Training and development environment at Vignesh Technologies"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 px-3 py-2">
                <p className="text-xs font-semibold text-navy">Technology Center in Rajapalayam</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Dedicated facility for software development, client meetings, and technical training sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              About Vignesh Technologies
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl text-balance">
              A Technology Company Built on Practical Engineering &amp; Education
            </h2>

            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Vignesh Technologies is an independent technology company founded in Rajapalayam, Tamil Nadu. We specialize in software development, web applications, mobile apps, digital solutions, and practical IT training.
            </p>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We operate with a two-fold focus: delivering robust, customer-oriented software systems for businesses, and equipping students and aspiring developers with pragmatic, industry-aligned technical skills.
            </p>

            {/* Mission & Vision Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/80 bg-secondary/30 p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="size-4" />
                  </div>
                  <h3 className="text-sm font-bold text-navy">Our Mission</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  To deliver reliable, affordable software solutions for businesses and practical technology education that builds real technical competence.
                </p>
              </div>

              <div className="rounded-xl border border-border/80 bg-secondary/30 p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600">
                    <Eye className="size-4" />
                  </div>
                  <h3 className="text-sm font-bold text-navy">Our Vision</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  To serve as a trusted regional technology partner transforming business requirements into dependable digital products while fostering local tech talent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Vignesh Technologies (Value Propositions) */}
        <div className="mt-20 pt-16 border-t border-border/80">
          <div className="max-w-3xl mb-12">
            <p className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              Why Partner With Us
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Pragmatic Engineering &amp; Direct Accountability
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Here is how we approach client engagements and software craftsmanship.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/80 bg-card p-5.5 shadow-2xs hover:border-primary/40 transition-colors"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3.5">
                  <item.icon className="size-5" />
                </div>
                <h4 className="text-sm font-bold text-navy">{item.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
