import Image from 'next/image'
import { Lightbulb, BadgeCheck, HeartHandshake, TrendingUp, Target, Eye } from 'lucide-react'

const coreValues = [
  { icon: Lightbulb, label: 'Innovation', text: 'Creative solutions built with modern technology.' },
  { icon: BadgeCheck, label: 'Quality', text: 'High standards in every product we deliver.' },
  { icon: HeartHandshake, label: 'Trust', text: 'Honest, transparent partnerships with clients.' },
  { icon: TrendingUp, label: 'Growth', text: 'Helping businesses and students move forward.' },
]

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/about-office.png"
              alt="Technology training classroom at Vignesh Technologies"
              width={640}
              height={480}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">About Us</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
              A Technology Company Built on Purpose
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Vignesh Technologies is a technology company focused on creating innovative digital
              solutions, mobile applications, websites, and technology education programs. Based in
              Rajapalayam, Tamil Nadu, we serve businesses and students with equal dedication.
            </p>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Eye className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">Our Vision</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    To become a trusted technology partner that transforms ideas into impactful
                    digital products and empowers the next generation of tech talent.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Target className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">Our Mission</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    To deliver reliable, affordable software solutions and practical technology
                    education that create real value for businesses and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <div
              key={value.label}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="mb-4 flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
                <value.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-navy">{value.label}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
