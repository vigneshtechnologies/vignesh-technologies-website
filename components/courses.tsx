import Link from 'next/link'
import {
  Monitor,
  FileSpreadsheet,
  Braces,
  Binary,
  Code,
  Layout,
  Palette,
  Briefcase,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const courses = [
  {
    icon: Monitor,
    title: 'Basic Computer & AI',
    level: 'Beginner',
  },
  {
    icon: FileSpreadsheet,
    title: 'MS Office & AI',
    level: 'Beginner',
  },
  {
    icon: Palette,
    title: 'Canva & Basic Graphic Design',
    level: 'Beginner',
  },
  {
    icon: Braces,
    title: 'C Programming',
    level: 'Programming',
  },
  {
    icon: Code,
    title: 'Python Programming',
    level: 'Programming',
  },
  {
    icon: Layout,
    title: 'HTML, CSS & JavaScript',
    level: 'Programming',
  },
  {
    icon: Monitor,
    title: 'React JS',
    level: 'Professional',
  },
  {
    icon: Binary,
    title: 'Python Django',
    level: 'Professional',
  },
  {
    icon: Code,
    title: 'Android App Development',
    level: 'Professional',
  },
  {
    icon: Briefcase,
    title: 'Python Full-Stack Development',
    level: 'Career',
  },
  {
    icon: Briefcase,
    title: 'Java Full-Stack Development',
    level: 'Career',
  },
  {
    icon: Monitor,
    title: 'Data Analysis & Artificial Intelligence',
    level: 'Career',
  },
]

const badgeColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Programming: 'bg-blue-100 text-blue-700',
  Professional: 'bg-purple-100 text-purple-700',
  Career: 'bg-orange-100 text-orange-700',
}

export function Courses() {
  return (
    <section id="courses" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
            Computer Courses
          </p>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Learn Technology. Build Your Future.
          </h2>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Practical, industry-focused computer courses designed to help
            students, beginners, and professionals build real-world skills and
            advance their careers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <course.icon className="h-6 w-6" />
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColors[course.level]}`}
                >
                  {course.level}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-navy">
                {course.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Professional training with practical exercises, projects, and
                expert guidance.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="#contact">
            <Button size="lg" className="px-8">
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}