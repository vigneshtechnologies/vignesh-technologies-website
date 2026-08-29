import Link from 'next/link'
import { ShieldCheck, Flag, UserX, FileText, Lock } from 'lucide-react'

const safetyFeatures = [
  {
    icon: Flag,
    title: 'Content & User Reporting',
    description:
      'Report abusive, fraudulent, or inappropriate posts, comments, businesses, jobs, and profiles.',
  },
  {
    icon: ShieldCheck,
    title: 'Active Community Moderation',
    description:
      'Reported items are reviewed by administrators with proactive removal of guideline violations.',
  },
  {
    icon: Lock,
    title: 'Privacy & Data Protection',
    description:
      'Your private details and credentials are safe. We never sell personal data or share private chats.',
  },
  {
    icon: UserX,
    title: 'Full Account Deletion',
    description:
      'Users maintain complete ownership of their account with immediate self-deletion in Settings.',
  },
]

export function TrustAndSafety() {
  return (
    <section id="safety" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Trust &amp; Safety
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A Safe Space for Local Communities
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            We are committed to maintaining a trustworthy, respectful, and safe platform for all residents and local merchants.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {safetyFeatures.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-navy">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs font-medium text-muted-foreground">
          <Link href="/terms" className="inline-flex items-center gap-1 hover:text-primary">
            <FileText className="size-3.5" />
            <span>Terms of Service</span>
          </Link>
          <span>•</span>
          <a
            href="https://sites.google.com/view/circular-privacy-policy/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-primary"
          >
            <Lock className="size-3.5" />
            <span>Privacy Policy</span>
          </a>
          <span>•</span>
          <a
            href="https://sites.google.com/view/circular-privacy-policy/community-guidelines"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-primary"
          >
            <ShieldCheck className="size-3.5" />
            <span>Community Guidelines</span>
          </a>
        </div>
      </div>
    </section>
  )
}
