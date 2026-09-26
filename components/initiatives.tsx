import Link from 'next/link'
import Image from 'next/image'
import {
  Trophy,
  School,
  FileText,
  Download,
  ArrowRight,
  ExternalLink,
  Users,
} from 'lucide-react'

export function Initiatives() {
  return (
    <section id="initiatives" className="py-16 md:py-24 bg-secondary/40 border-y border-border/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
            Community &amp; Education
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl text-balance">
            Educational Initiatives &amp; Competitions
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Encouraging practical digital literacy and creative thinking among students through technology challenges and guided learning programs.
          </p>
        </div>

        {/* Feature Banner Card */}
        <div className="mt-12 rounded-2xl border border-border/80 bg-card overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-12 items-center">
            {/* Left Content Column */}
            <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-4">
                  <Trophy className="size-3.5" />
                  <span>Featured School Initiative</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  Virudhunagar District School Innovation Challenge
                </h3>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  An online innovation competition organized for students of Classes 6 to 12 across schools in Virudhunagar District. The challenge invites participating teams to formulate and present innovative digital app concepts addressing community and neighborhood needs using the Circular App platform.
                </p>

                {/* Key Points */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2.5 rounded-lg bg-secondary/60 p-3">
                    <School className="size-4 shrink-0 text-primary mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-navy">Eligibility</span>
                      <span className="text-[11px] text-muted-foreground">Classes 6 to 12 (Virudhunagar District)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-lg bg-secondary/60 p-3">
                    <Users className="size-4 shrink-0 text-primary mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-navy">Format</span>
                      <span className="text-[11px] text-muted-foreground">Individual or teams of up to 2 students</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/competition"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 transition-colors"
                >
                  <span>View Full Competition Details</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <a
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-navy hover:bg-accent transition-colors"
                >
                  <Download className="size-3.5 text-muted-foreground" />
                  <span>Download PDF Brochure</span>
                </a>
              </div>
            </div>

            {/* Right Banner Image Column */}
            <div className="lg:col-span-5 p-6 lg:p-8 flex justify-center bg-secondary/30 lg:border-l border-border/80">
              <div className="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-xl border border-border/70 bg-card shadow-md">
                <Image
                  src="/competition-banner.png"
                  alt="Virudhunagar District School Innovation Challenge Banner"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
