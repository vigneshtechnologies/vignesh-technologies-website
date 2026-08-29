import { FileText, Briefcase, HandHeart, Calendar, MessageSquare, ShieldCheck } from 'lucide-react'

const communityPillars = [
  {
    icon: FileText,
    title: 'Neighborhood Feed',
    description: 'Share photos, updates, thoughts, and local discussions with people nearby.',
  },
  {
    icon: Briefcase,
    title: 'Local Job Openings',
    description: 'Post and discover local hiring opportunities without expensive agencies.',
  },
  {
    icon: HandHeart,
    title: 'Community Need Board',
    description: 'Quickly ask for help, items, recommendations, or urgent requirements.',
  },
  {
    icon: Calendar,
    title: 'Nearby Events & Meetups',
    description: 'Stay updated with local cultural events, workshops, festivals, and challenges.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Chat',
    description: 'Connect one-on-one with local creators, business owners, or organizers.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Moderated',
    description: 'Strict community guidelines, user reporting tools, and active moderation.',
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Neighborhood Network
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A Stronger Community Starts Here
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Circular empowers neighbors to collaborate, support local commerce, find local opportunities, and stay informed.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communityPillars.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="size-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy">{p.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
