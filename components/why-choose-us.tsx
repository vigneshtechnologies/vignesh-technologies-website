import { Cpu, Hammer, Wallet, Smile } from 'lucide-react'

const reasons = [
  {
    icon: Cpu,
    title: 'Modern Technology',
    description: 'We build with the latest tools, frameworks, and best practices.',
  },
  {
    icon: Hammer,
    title: 'Practical Learning',
    description: 'Hands-on training that prepares students for real careers.',
  },
  {
    icon: Wallet,
    title: 'Affordable Solutions',
    description: 'Quality software and education at prices that make sense.',
  },
  {
    icon: Smile,
    title: 'Customer Satisfaction',
    description: 'We measure success by the happiness of our clients and students.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Why Choose Us</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
            The Vignesh Technologies Advantage
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-xl bg-secondary p-6 text-center">
              <span className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <reason.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-navy">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
