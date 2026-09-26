'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Monitor,
  FileSpreadsheet,
  Braces,
  Code,
  Binary,
  Layout,
  Palette,
  Sparkles,
  Smartphone,
  Server,
  Briefcase,
  ArrowRight,
} from 'lucide-react'

type CourseTier = 'All' | 'Beginner' | 'Programming' | 'Professional' | 'Advanced'

interface CourseItem {
  title: string
  tier: CourseTier
  icon: typeof Monitor
  description: string
  focusAreas: string[]
}

const confirmedCourses: CourseItem[] = [
  {
    title: 'Basic Computer & AI',
    tier: 'Beginner',
    icon: Monitor,
    description: 'Fundamental computer hardware, OS navigation, file management, internet essentials, and introduction to AI tools.',
    focusAreas: ['Computer Fundamentals', 'Operating Systems', 'Digital Essentials'],
  },
  {
    title: 'MS Office & AI',
    tier: 'Beginner',
    icon: FileSpreadsheet,
    description: 'Hands-on training on Microsoft Word, Excel spreadsheet operations, PowerPoint presentations, and AI productivity tools.',
    focusAreas: ['MS Word', 'MS Excel', 'PowerPoint'],
  },
  {
    title: 'Canva & Basic Graphic Design',
    tier: 'Beginner',
    icon: Palette,
    description: 'Design fundamentals, color principles, typography, digital vector graphics, and social banner creations using Canva.',
    focusAreas: ['Canva Design', 'Visual Layouts', 'Digital Assets'],
  },
  {
    title: 'C Programming',
    tier: 'Programming',
    icon: Braces,
    description: 'Foundational programming principles, logic building, data types, control structures, functions, pointers, and memory concepts.',
    focusAreas: ['Algorithm Logic', 'Pointers & Memory', 'Structured Code'],
  },
  {
    title: 'Python Programming',
    tier: 'Programming',
    icon: Code,
    description: 'Modern Python syntax, core data structures, modular programming, file handling, and automation scripting essentials.',
    focusAreas: ['Python Syntax', 'Data Structures', 'Modules & Scripting'],
  },
  {
    title: 'HTML, CSS & JavaScript',
    tier: 'Programming',
    icon: Layout,
    description: 'Structuring and styling modern web layouts with semantic HTML5, CSS3 responsive design, and core JavaScript DOM interaction.',
    focusAreas: ['Semantic HTML', 'CSS Flex & Grid', 'JavaScript DOM'],
  },
  {
    title: 'React JS',
    tier: 'Professional',
    icon: Code,
    description: 'Component architecture, state management with hooks, props, virtual DOM, and modern single-page web application structure.',
    focusAreas: ['Components & JSX', 'State & Hooks', 'Modern Web UIs'],
  },
  {
    title: 'Python Django',
    tier: 'Professional',
    icon: Server,
    description: 'Python web framework covering Model-View-Template (MVT) architecture, ORM database operations, and web application endpoints.',
    focusAreas: ['MVT Architecture', 'Django ORM', 'Python Web Apps'],
  },
  {
    title: 'Android App Development',
    tier: 'Professional',
    icon: Smartphone,
    description: 'Mobile app engineering for Android devices, covering user interfaces, activities, app lifecycle, and local storage in Android Studio.',
    focusAreas: ['Android Studio', 'UI Components', 'Mobile Architecture'],
  },
  {
    title: 'Python Full-Stack Development',
    tier: 'Advanced',
    icon: Briefcase,
    description: 'Comprehensive full-stack engineering combining Python backends, databases, API integration, and front-end interface development.',
    focusAreas: ['Frontend & Backend', 'Database Design', 'Full-Stack Integration'],
  },
  {
    title: 'Java Full-Stack Development',
    tier: 'Advanced',
    icon: Binary,
    description: 'Comprehensive enterprise engineering covering core Java, object-oriented design, database connectivity, and full-stack web applications.',
    focusAreas: ['Core Java', 'OOP Architecture', 'Full-Stack Web'],
  },
  {
    title: 'Data Analysis & Artificial Intelligence',
    tier: 'Advanced',
    icon: Sparkles,
    description: 'Practical data analysis methodologies, tabular data processing with Python, visualization, and applied artificial intelligence concepts.',
    focusAreas: ['Data Processing', 'Applied AI Tools', 'Python Analytics'],
  },
]

const tiers: CourseTier[] = ['All', 'Beginner', 'Programming', 'Professional', 'Advanced']

export function Courses() {
  const [selectedTier, setSelectedTier] = useState<CourseTier>('All')

  const filteredCourses =
    selectedTier === 'All'
      ? confirmedCourses
      : confirmedCourses.filter((course) => course.tier === selectedTier)

  return (
    <section id="courses" className="py-16 md:py-24 bg-secondary/30 border-y border-border/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
            Technical Education
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl text-balance">
            IT Courses &amp; Technology Training
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Practical, curriculum-grounded computer training from foundational digital literacy to core programming languages, modern web design, and software frameworks in Rajapalayam.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {tiers.map((tier) => (
              <button
                key={tier}
                type="button"
                onClick={() => setSelectedTier(tier)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  selectedTier === tier
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'border border-border bg-card text-muted-foreground hover:bg-accent hover:text-navy'
                }`}
              >
                {tier === 'All' ? 'All Courses (12)' : tier}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col justify-between rounded-xl border border-border/80 bg-card p-5 shadow-2xs transition-all duration-200 hover:border-primary/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <course.icon className="size-5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                    {course.tier}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy">{course.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-border/60">
                <div className="flex flex-wrap gap-1 mb-3">
                  {course.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded bg-secondary/80 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline"
                >
                  <span>Inquire for Admission</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Training Inquiries Box */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            Classes are conducted in Rajapalayam, Tamil Nadu with practical exercise sessions.
          </p>
          <div className="mt-4 inline-flex items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
            >
              <span>Enroll / Inquire About Batches</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <a
              href="https://wa.me/918122753620"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-navy hover:bg-accent transition-colors"
            >
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}