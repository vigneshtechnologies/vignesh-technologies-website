import Link from 'next/link'
import {
  Trophy,
  Users,
  Smartphone,
  School,
  ArrowRight,
  CalendarDays,
  Award,
  Sparkles,
  GraduationCap,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const googleFormLink =
  'https://docs.google.com/forms/d/1N48u9GQm_UvDJ751OeB4B2LRGkauBmTuzpRqt4eHujA/viewform'

const highlights = [
  {
    icon: School,
    title: 'Rajapalayam Taluk Scope',
    description:
      'Open to all eligible school and college students studying in Rajapalayam Taluk.',
  },
  {
    icon: Smartphone,
    title: 'Round 1 on Circular App',
    description:
      'Post your problem & solution under Education category and gather community likes.',
  },
  {
    icon: Users,
    title: '5 Categories & Flexible Teams',
    description:
      'Schools (6–8, 9–12), Arts & Science, Engineering, Polytechnic. Individual or teams of 2.',
  },
  {
    icon: Award,
    title: '50 Winning Teams',
    description:
      'Complimentary app development training for schools & tech internships for colleges.',
  },
]

const importantDates = [
  {
    title: 'Competition Launch',
    date: '12 October 2026',
  },
  {
    title: 'Registration Period',
    date: '12 – 25 October 2026',
  },
  {
    title: 'Idea / Circular Submission',
    date: '12 – 31 October 2026',
  },
  {
    title: 'Community Support / Likes',
    date: '12 October – 7 November 2026',
  },
  {
    title: 'Round 1 Evaluation',
    date: '8 – 12 November 2026',
  },
  {
    title: 'Finalists Announcement',
    date: '13 November 2026',
  },
  {
    title: 'Grand Finale (Online)',
    date: '23 – 27 November 2026',
  },
  {
    title: 'Results Announcement',
    date: '27 November 2026',
  },
]

export function Competition() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Trophy className="h-4 w-4" />
            <span>Featured Innovation Challenge</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Rajapalayam Taluk Student Innovation Challenge 2026
          </h2>

          <p className="mt-2 text-primary font-semibold">
            Official Platform: Circular App
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Organized by Vignesh Technologies for students studying across Rajapalayam Taluk. Identify a real problem and propose an innovative digital, technology, AI, social, environmental, or community solution.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-card p-6 rounded-2xl border hover:shadow-md transition text-center"
            >
              <item.icon className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-bold text-navy mt-4">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Overview Box */}
        <div className="mt-12 bg-card border rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                100% Free Registration • 2 Rounds
              </span>
              <h3 className="text-2xl font-bold text-navy mt-2">
                Empowering Problem Solvers in Rajapalayam Taluk
              </h3>
              <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
                Students participate in 2 rounds: Round 1 idea submission and community support on Circular App, followed by an online final presentation before expert judges. No prototype is compulsory.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="bg-secondary px-3 py-1.5 rounded-lg text-navy font-medium">
                  School Classes 6–8 (10 Winners)
                </span>
                <span className="bg-secondary px-3 py-1.5 rounded-lg text-navy font-medium">
                  School Classes 9–12 (10 Winners)
                </span>
                <span className="bg-secondary px-3 py-1.5 rounded-lg text-navy font-medium">
                  Arts &amp; Science (10 Winners)
                </span>
                <span className="bg-secondary px-3 py-1.5 rounded-lg text-navy font-medium">
                  Engineering (10 Winners)
                </span>
                <span className="bg-secondary px-3 py-1.5 rounded-lg text-navy font-medium">
                  Polytechnic (10 Winners)
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 text-center">
              <Sparkles className="h-10 w-10 text-primary mx-auto" />
              <h4 className="text-xl font-bold text-navy mt-3">
                50 Winning Teams Total
              </h4>
              <p className="text-xs text-muted-foreground mt-2">
                Complimentary app development training for school teams &amp; complimentary technology internships for college teams.
              </p>
              <div className="mt-4 pt-4 border-t border-primary/20 text-[11px] text-muted-foreground">
                Special Institution Recognition for schools/colleges with 100+ verified student participants.
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 bg-card border rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <CalendarDays className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold text-navy">Important Dates</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {importantDates.map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-secondary/50 border">
                <p className="text-xs font-semibold text-primary">{item.date}</p>
                <p className="text-sm font-bold text-navy mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/competition">
            <Button size="lg" className="w-full sm:w-auto">
              <span>View Full Challenge Details</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <span>Register Now</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}