import { Compass, UserPlus, Search, Share2, TrendingUp } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Compass,
    title: 'Discover',
    description: 'Set your area or allow location to view nearby posts, shops, and happenings.',
  },
  {
    step: '02',
    icon: UserPlus,
    title: 'Connect',
    description: 'Follow local profiles, chat with business owners, and build local networks.',
  },
  {
    step: '03',
    icon: Search,
    title: 'Explore',
    description: 'Browse local job openings, emergency needs, events, and rated local services.',
  },
  {
    step: '04',
    icon: Share2,
    title: 'Share',
    description: 'Post community updates, write reviews, list offers, and share canonical links.',
  },
  {
    step: '05',
    icon: TrendingUp,
    title: 'Grow Locally',
    description: 'Expand your business reach, build customer loyalty, and strengthen your area.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Simple Workflow
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            How Circular Works
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Getting started with Circular is seamless for both residents and local businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item, index) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <div className="absolute -top-3.5 right-4 rounded-full bg-primary px-2 py-0.5 text-[10px] font-extrabold text-white shadow">
                {item.step}
              </div>

              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="size-7" />
              </div>

              <h3 className="mt-4 text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
