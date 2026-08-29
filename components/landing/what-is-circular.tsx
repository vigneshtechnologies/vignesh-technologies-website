import { MapPin, Users, Store, HeartHandshake } from 'lucide-react'

export function WhatIsCircular() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            About The Platform
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Connecting People with Their Local Community
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Circular is built to bridge the gap between residents, local business owners, service providers, and neighborhood organizations. We bring everything happening locally into one easy-to-use mobile experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
              <MapPin className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy">Hyperlocal Focus</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Content tailored to your town, locality, and neighborhood without algorithmic noise.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex size-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
              <Store className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy">Local Commerce</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Discover verified local shops, services, authentic customer reviews, and offers.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex size-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-600">
              <Users className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy">Community Engagement</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Share updates, discuss local happenings, like, comment, and connect with people nearby.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
              <HeartHandshake className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy">Opportunities &amp; Needs</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Find local jobs, post community needs, discover volunteer events, and support each other.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
