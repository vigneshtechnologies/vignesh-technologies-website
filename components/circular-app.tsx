import Image from 'next/image'
import {
  Newspaper,
  Store,
  CalendarDays,
  BadgePercent,
  MessagesSquare,
  Bell,
  Play,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  { icon: Newspaper, label: 'Local Updates' },
  { icon: Store, label: 'Business Profiles' },
  { icon: CalendarDays, label: 'Events' },
  { icon: BadgePercent, label: 'Offers' },
  { icon: MessagesSquare, label: 'Community Posts' },
  { icon: Bell, label: 'Notifications' },
]

export function CircularApp() {
  return (
    <section id="products" className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="order-2 md:order-1">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
            Our Product
          </p>

          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Circular — Local Community Platform
          </h2>

          <p className="mt-4 leading-relaxed text-navy-foreground/80">
            Circular connects people, businesses, events, and local updates in one platform. Stay
            informed about everything happening in your community.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <li
                key={feature.label}
                className="flex items-center gap-3 rounded-lg bg-navy-foreground/5 p-3"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/20 text-navy-foreground">
                  <feature.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium">{feature.label}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8"
          >
            <Button size="lg">
              <Play className="size-4" aria-hidden="true" />
              Get it on Google Play
            </Button>
          </a>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <Image
            src="/images/circular-app.png"
            alt="Circular app on a smartphone showing local updates, business profiles and events"
            width={420}
            height={560}
            className="h-auto w-full max-w-sm rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}