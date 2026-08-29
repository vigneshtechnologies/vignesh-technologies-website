import {
  Store,
  MapPin,
  Camera,
  Star,
  Users,
  CheckCircle2,
  Smartphone,
} from 'lucide-react'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.vigneshtechnologies.circular'

const businessBenefits = [
  {
    icon: Store,
    title: 'Dedicated Business Profile',
    description:
      'Showcase your brand name, operating hours, categories, contact options, and descriptions.',
  },
  {
    icon: MapPin,
    title: 'Pinpoint Location on Map',
    description:
      'Enable nearby customers to find directions straight to your storefront using coordinates.',
  },
  {
    icon: Camera,
    title: 'High-Quality Photo Gallery',
    description:
      'Upload products, storefront pictures, menus, and business photos to build credibility.',
  },
  {
    icon: Star,
    title: 'Authentic 1-User-1-Review System',
    description:
      'Fair, spam-free reviews from real local customers. Business owners cannot review themselves.',
  },
  {
    icon: Users,
    title: 'Hyperlocal Customer Reach',
    description:
      'Get discovered by residents browsing your area, locality, or category on Circular.',
  },
  {
    icon: CheckCircle2,
    title: 'Admin Verified Badges',
    description:
      'Earn verified status and trusted business badges to stand out in the local directory.',
  },
]

export function BusinessSection() {
  return (
    <section id="businesses" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-8 shadow-xl md:p-12 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full bg-purple-500/10 px-3.5 py-1 text-xs font-bold text-purple-600">
                For Local Merchants &amp; Businesses
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Grow Your Business with Local Customers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Whether you run a local retail shop, restaurant, service center, coaching academy, or freelance business, Circular gives you the tools to get discovered right in your community.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {businessBenefits.map((b) => (
                  <div key={b.title} className="flex gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <b.icon className="size-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy">{b.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {b.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  <Smartphone className="size-4" />
                  <span>Register Your Business on Circular</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-5">
              <div className="relative w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-lg">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-purple-600 text-white font-black text-xl">
                    C
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-navy">Sample Local Business</span>
                      <CheckCircle2 className="size-4 text-emerald-500 fill-emerald-500/20" />
                    </div>
                    <span className="text-xs text-muted-foreground">Retail &amp; Services • Rajapalayam</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-bold text-amber-500">★ 4.9 (28 reviews)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium text-navy">0.4 km away</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Operating</span>
                    <span className="font-medium text-emerald-600">Open Now</span>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-muted/60 p-3 text-xs leading-relaxed text-muted-foreground">
                  “Circular helped us reach hundreds of local customers right in our neighborhood who didn’t know about our shop before!”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
