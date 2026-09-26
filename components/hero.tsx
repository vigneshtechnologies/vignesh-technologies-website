import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code2, Sparkles, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-background pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground shadow-2xs backdrop-blur-xs">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <MapPin className="size-3 text-primary" />
              <span>Technology Company • Rajapalayam, Tamil Nadu</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl text-balance leading-[1.12]">
              Engineering Digital Solutions.{' '}
              <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                Empowering Growth.
              </span>
            </h1>

            {/* Positioning Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Vignesh Technologies delivers reliable software development, mobile applications, modern websites, AI and digital solutions, alongside practical IT education for students and aspiring engineers.
            </p>

            {/* Three Pillars Summary */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3 w-full max-w-xl">
              <div className="flex items-center gap-2.5 rounded-lg border border-border/70 bg-card p-2.5 shadow-2xs">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-primary">
                  <Code2 className="size-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-navy uppercase tracking-wider">Build</span>
                  <span className="text-[11px] text-muted-foreground">Software, Web & Apps</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-lg border border-border/70 bg-card p-2.5 shadow-2xs">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-purple-500/10 text-purple-600">
                  <Sparkles className="size-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-navy uppercase tracking-wider">Innovate</span>
                  <span className="text-[11px] text-muted-foreground">Products & AI Systems</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-lg border border-border/70 bg-card p-2.5 shadow-2xs">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600">
                  <GraduationCap className="size-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-navy uppercase tracking-wider">Learn</span>
                  <span className="text-[11px] text-muted-foreground">Professional Training</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <span>Explore Services</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#product"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-accent hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <span>View Circular Product</span>
              </Link>

              <Link
                href="#courses"
                className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                <span>IT Academy</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-xl">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-950">
                  <Image
                    src="/images/hero-tech.png"
                    alt="Technology engineering team at Vignesh Technologies"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-xl border border-white/10 bg-slate-950/85 p-3.5 backdrop-blur-md">
                      <p className="text-xs font-semibold text-white">Full-Lifecycle Technology Partner</p>
                      <p className="mt-0.5 text-[11px] text-slate-300">From concept and architecture to production deployment & training</p>
                    </div>
                  </div>
                </div>

                {/* Technical Capability Badges */}
                <div className="mt-3 grid grid-cols-2 gap-2 p-2">
                  <div className="flex items-center gap-2 rounded-lg bg-secondary/60 p-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    <span className="text-xs font-medium text-navy">Web & Mobile Platforms</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-secondary/60 p-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    <span className="text-xs font-medium text-navy">Custom Business Systems</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-secondary/60 p-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    <span className="text-xs font-medium text-navy">AI & Digital Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-secondary/60 p-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    <span className="text-xs font-medium text-navy">Hands-on IT Academy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}