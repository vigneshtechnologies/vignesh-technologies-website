import Link from 'next/link'
import {
  Trophy,
  Users,
  Clock,
  Smartphone,
  School,
  FileText,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = [
  {
    icon: School,
    title: 'Virudhunagar District Edition',
    description:
      'Open for school students across Virudhunagar District.',
  },
  {
    icon: Smartphone,
    title: 'App Development Challenge',
    description:
      'Create innovative app ideas and showcase your creativity.',
  },
  {
    icon: Clock,
    title: '10 Minute Challenge',
    description:
      'Students will get a limited time slot to develop their idea.',
  },
  {
    icon: Users,
    title: 'Open to All Schools',
    description:
      'Participation is not restricted only to ATL schools.',
  },
]

export function Competition() {
  return (
    <section
      id="competition"
      className="bg-primary/5"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">

        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
            <Trophy className="h-7 w-7" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Upcoming Event
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Circular App Development Challenge 2026
          </h2>

          <p className="mt-3 text-lg font-medium text-primary">
            Virudhunagar District Edition
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            A student innovation challenge where young minds build app ideas,
            explore technology and showcase their creativity.
          </p>

        </div>


        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-4 font-semibold text-navy">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>

            </div>
          ))}

        </div>


        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <Link href="/competition">

            <Button size="lg">
              View Competition Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

          </Link>


          <a
            href="/brochure.pdf"
            target="_blank"
          >

            <Button
              size="lg"
              variant="outline"
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>

          </a>

        </div>

      </div>
    </section>
  )
}