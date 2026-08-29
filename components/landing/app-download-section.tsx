import Image from 'next/image'
import { Smartphone, CheckCircle2, Star } from 'lucide-react'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.vigneshtechnologies.circular'

export function AppDownloadSection() {
  return (
    <section className="bg-navy py-16 text-navy-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-white">
              <Smartphone className="size-3.5 text-primary" />
              <span>Available for Android</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Get Circular on Google Play
            </h2>

            <p className="mt-4 text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
              Download the Circular mobile app today to discover nearby shops, community posts, jobs, needs, and local events. Connect with your neighborhood in seconds.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-navy-foreground/90">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                <span>Fast, lightweight, and battery-optimized</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                <span>Real-time notifications for nearby updates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                <span>100% Free for residents &amp; local businesses</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105"
              >
                <Smartphone className="size-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold text-white/80">Get it on</div>
                  <div className="text-base leading-tight font-black">Google Play</div>
                </div>
              </a>

              <div className="flex items-center gap-2 text-xs text-navy-foreground/70">
                <div className="flex text-amber-400">
                  <Star className="size-4 fill-amber-400" />
                  <Star className="size-4 fill-amber-400" />
                  <Star className="size-4 fill-amber-400" />
                  <Star className="size-4 fill-amber-400" />
                  <Star className="size-4 fill-amber-400" />
                </div>
                <span>Rated by local community members</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5">
            <div className="relative">
              <div className="relative size-64 overflow-hidden rounded-3xl bg-white/5 p-4 shadow-2xl ring-1 ring-white/10 sm:size-72">
                <Image
                  src="/circular-logo.png"
                  alt="Circular App Logo"
                  fill
                  className="rounded-2xl object-cover p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
