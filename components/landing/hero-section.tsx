import Image from 'next/image'
import { Smartphone, Sparkles, MapPin, Compass } from 'lucide-react'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.vigneshtechnologies.circular'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-16 md:py-24">
      {/* Background ambient orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-24 -z-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left copy */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary shadow-sm">
              <Sparkles className="size-3.5" />
              <span>Hyperlocal Social &amp; Business Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Discover What’s Happening{' '}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Around You
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Circular connects you with your local neighborhood. Discover nearby businesses, browse community posts, explore local jobs, fulfill community needs, and stay updated with local events — all in one place.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <Smartphone className="size-5" />
                <span>Download Circular</span>
              </a>

              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground shadow-sm transition-all hover:bg-muted"
              >
                <Compass className="size-5 text-primary" />
                <span>Explore Features</span>
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8 text-center sm:text-left">
              <div>
                <div className="text-2xl font-black text-navy sm:text-3xl">Local</div>
                <div className="text-xs text-muted-foreground">Nearby First</div>
              </div>
              <div>
                <div className="text-2xl font-black text-navy sm:text-3xl">Verified</div>
                <div className="text-xs text-muted-foreground">Real Businesses</div>
              </div>
              <div>
                <div className="text-2xl font-black text-navy sm:text-3xl">Active</div>
                <div className="text-xs text-muted-foreground">Community Feeds</div>
              </div>
            </div>
          </div>

          {/* Right Smartphone showcase */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative">
              <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[2.5rem] border-8 border-navy bg-navy shadow-2xl ring-1 ring-white/10 sm:max-w-[360px]">
                <Image
                  src="/images/circular-app.png"
                  alt="Circular App Smartphone Interface"
                  width={360}
                  height={720}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              {/* Floating feature pills */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-2.5 rounded-2xl border border-border bg-card p-3 shadow-xl backdrop-blur-md">
                <div className="flex size-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy">Hyperlocal Area</div>
                  <div className="text-[10px] text-muted-foreground">Near your location</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
