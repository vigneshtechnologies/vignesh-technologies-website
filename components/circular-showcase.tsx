import Image from 'next/image'
import {
  ExternalLink,
  Store,
  Calendar,
  Briefcase,
  MessagesSquare,
  Compass,
  Smartphone,
  Globe,
} from 'lucide-react'

const features = [
  {
    icon: Compass,
    title: 'Hyperlocal Discovery',
    description: 'Explore updates, announcements, and happenings within your immediate neighborhood and local area.',
  },
  {
    icon: Store,
    title: 'Local Business Profiles',
    description: 'Empowers neighbourhood merchants, shops, and service providers to establish a digital presence and connect with nearby residents.',
  },
  {
    icon: MessagesSquare,
    title: 'Community Posts',
    description: 'Share news, local questions, public notices, and civic discussions directly with people in your local vicinity.',
  },
  {
    icon: Calendar,
    title: 'Neighborhood Events',
    description: 'Discover local cultural programs, school events, workshops, and community gatherings happening around you.',
  },
  {
    icon: Briefcase,
    title: 'Local Job Opportunities',
    description: 'Connect local job seekers with nearby employment openings and business vacancies within the community.',
  },
  {
    icon: Smartphone,
    title: 'Multi-Platform Access',
    description: 'Available as a dedicated Android mobile application and as a responsive web platform accessible from any modern browser.',
  },
]

export function CircularShowcase() {
  return (
    <section id="product" className="relative bg-[#0B0F19] text-slate-100 py-16 md:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Badge & Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400">
            <span>Product by Vignesh Technologies</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
            Circular — Hyperlocal Community &amp; Business Platform
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Developed in-house by Vignesh Technologies, Circular is a dedicated hyperlocal platform bridging the gap between local residents, community news, neighborhood businesses, jobs, and events.
          </p>
        </div>

        {/* Product Details Grid */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          {/* Feature Highlights (Left column) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4.5 backdrop-blur-xs transition-colors hover:border-blue-500/40 hover:bg-white/[0.08]"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-3">
                    <feature.icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Platform Action Links */}
            <div className="mt-4 flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <a
                href="https://circularapp.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Globe className="size-4" />
                <span>Launch Circular Web App</span>
                <ExternalLink className="size-3.5 opacity-80" />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.vigneshtechnologies.circular"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold text-white transition-all hover:bg-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Smartphone className="size-4 text-emerald-400" />
                <span>Get it on Google Play</span>
                <ExternalLink className="size-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Product Smartphone Mock Visual (Right column) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Outer decorative glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20 blur-xl" />
              
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black">
                  <Image
                    src="/images/circular-app.png"
                    alt="Circular mobile application interface on smartphone"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-3 px-2 py-1 text-center">
                  <p className="text-xs font-medium text-slate-300">
                    Live Platform: <span className="text-blue-400 font-semibold">circularapp.in</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Engineering, deployment, and infrastructure managed by Vignesh Technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
