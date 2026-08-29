import {
  Compass,
  Store,
  FileText,
  Briefcase,
  HandHeart,
  Calendar,
  MessageCircle,
  Bell,
  Search,
  Megaphone,
} from 'lucide-react'

const features = [
  {
    icon: Compass,
    title: 'Nearby Discovery',
    description:
      'Filter content, posts, and shops based on proximity to your current area and locality.',
    color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  },
  {
    icon: Store,
    title: 'Local Businesses',
    description:
      'Explore business profiles with photos, genuine reviews, ratings, operating hours, and location.',
    color: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  },
  {
    icon: FileText,
    title: 'Local Posts',
    description:
      'Share photos, stories, updates, and templates with your neighborhood. Engage via likes and comments.',
    color: 'bg-pink-500/10 text-pink-600 border-pink-500/20',
  },
  {
    icon: Briefcase,
    title: 'Local Jobs',
    description:
      'Find employment opportunities and hiring alerts posted directly by local employers.',
    color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  },
  {
    icon: HandHeart,
    title: 'Need Board',
    description:
      'Request help, find items, or fulfill requests from neighbors in your local community.',
    color: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  },
  {
    icon: Calendar,
    title: 'Community Events',
    description:
      'Never miss local festivals, school challenges, workshops, cultural gatherings, and sports events.',
    color: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
  },
  {
    icon: MessageCircle,
    title: 'Direct Messaging',
    description:
      'Chat directly with local residents, business owners, or organizers securely within the app.',
    color: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
  },
  {
    icon: Bell,
    title: 'Instant Notifications',
    description:
      'Real-time updates on likes, comments, reviews, following activities, and important announcements.',
    color: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
  },
  {
    icon: Search,
    title: 'Smart Search',
    description:
      'Find posts, businesses, jobs, and people across categories, areas, and custom search keywords.',
    color: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
  },
  {
    icon: Megaphone,
    title: 'Community Updates',
    description:
      'Stay informed with official broadcasts and important public announcements for your locality.',
    color: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
  },
]

export function KeyFeatures() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Platform Capabilities
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Everything You Need for Local Life
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A comprehensive suite of hyperlocal features designed to empower everyday living and local business growth.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div>
                <div
                  className={`flex size-11 items-center justify-center rounded-xl border ${item.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <item.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
