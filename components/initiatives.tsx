import Link from 'next/link'
import {
  Trophy,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Users,
  CheckCircle2,
  CalendarDays,
  Award,
} from 'lucide-react'

const googleFormResponderLink =
  'https://docs.google.com/forms/d/1N48u9GQm_UvDJ751OeB4B2LRGkauBmTuzpRqt4eHujA/viewform'

export function Initiatives() {
  return (
    <section id="initiatives" className="py-16 md:py-24 bg-secondary/40 border-y border-border/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
            Community &amp; Innovation
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl text-balance">
            Educational Initiatives &amp; Competitions
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Encouraging practical digital literacy, problem solving, and technological creativity among students through taluk-level innovation challenges and guided learning programs.
          </p>
        </div>

        {/* Feature Banner Card */}
        <div className="mt-12 rounded-2xl border border-border/80 bg-card overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-12 items-stretch">
            {/* Left Content Column */}
            <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-4">
                  <Trophy className="size-3.5" />
                  <span>Featured Student Initiative</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  Rajapalayam Taluk Student Innovation Challenge 2026
                </h3>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  An open innovation and problem-solving competition for school and college students across <strong>Rajapalayam Taluk</strong>. Students identify a real-world problem and propose an innovative digital, technology, AI, social, environmental, or community solution. Round 1 idea submission and community support take place on the <strong>Circular App</strong>.
                </p>

                {/* Key Points Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2.5 rounded-lg bg-secondary/60 p-3">
                    <GraduationCap className="size-4 shrink-0 text-primary mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-navy">Eligibility &amp; Scope</span>
                      <span className="text-[11px] text-muted-foreground">Institutions in Rajapalayam Taluk (5 Categories)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-lg bg-secondary/60 p-3">
                    <Users className="size-4 shrink-0 text-primary mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-navy">Team Size</span>
                      <span className="text-[11px] text-muted-foreground">Individual or teams of up to 2 students</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-lg bg-secondary/60 p-3">
                    <Award className="size-4 shrink-0 text-primary mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-navy">50 Winning Teams</span>
                      <span className="text-[11px] text-muted-foreground">Complimentary Tech Training &amp; Internships</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-lg bg-secondary/60 p-3">
                    <Sparkles className="size-4 shrink-0 text-primary mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-navy">100-Mark Evaluation</span>
                      <span className="text-[11px] text-muted-foreground">Problem, Innovation, Practicality, Impact &amp; Likes</span>
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
                  <span>View Challenge Details</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <a
                  href={googleFormResponderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-2.5 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors"
                >
                  <span>Register Now</span>
                  <ExternalLink className="size-3.5 text-primary" />
                </a>
              </div>
            </div>

            {/* Right Card Column - Modern SVG/CSS Visual Card */}
            <div className="lg:col-span-5 p-6 lg:p-8 flex items-center justify-center bg-gradient-to-br from-slate-900 via-navy to-slate-950 text-white lg:border-l border-border/80">
              <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/90">
                      Rajapalayam Taluk Edition
                    </span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                      FREE ENTRY
                    </span>
                  </div>

                  <h4 className="mt-4 text-lg font-bold text-white leading-snug">
                    Student Innovation Challenge 2026
                  </h4>
                  <p className="mt-1 text-xs text-slate-300">
                    Organized by Vignesh Technologies • Platform: Circular App
                  </p>

                  <div className="mt-5 space-y-2">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      5 Participation Categories:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] text-slate-200">
                        School (Classes 6–8)
                      </span>
                      <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] text-slate-200">
                        School (Classes 9–12)
                      </span>
                      <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] text-slate-200">
                        Arts &amp; Science
                      </span>
                      <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] text-slate-200">
                        Engineering
                      </span>
                      <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] text-slate-200">
                        Polytechnic
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-lg bg-white/5 p-2.5">
                    <span className="block text-base font-extrabold text-amber-400">50</span>
                    <span className="text-[10px] text-slate-300">Winning Teams Total</span>
                  </div>
                  <div className="rounded-lg bg-white/5 p-2.5">
                    <span className="block text-base font-extrabold text-sky-400">100</span>
                    <span className="text-[10px] text-slate-300">Evaluation Marks</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="size-3 text-primary-foreground" />
                    <span>12 Oct – 27 Nov 2026</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="size-3" />
                    <span>No Prototype Compulsory</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
