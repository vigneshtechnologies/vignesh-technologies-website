import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Shield, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Vignesh Technologies',
  description:
    'Privacy Policy for Vignesh Technologies. Learn how we handle project inquiries, communication details, and website analytics.',
  alternates: {
    canonical: 'https://vigneshtechnologies.vercel.app/privacy',
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 2026'

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5">
            <div className="size-8 overflow-hidden rounded-lg bg-white p-0.5 border border-slate-200 shadow-2xs">
              <Image
                src="/logo.png"
                alt="Vignesh Technologies Logo"
                width={32}
                height={32}
                className="size-full object-contain"
              />
            </div>
            <span className="text-sm font-bold tracking-tight text-navy">
              Vignesh <span className="text-primary">Technologies</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
        {/* Title Header */}
        <div className="mb-10 border-b border-border/80 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Shield className="size-3.5" />
            <span>Data Transparency</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            Vignesh Technologies • Rajapalayam, Tamil Nadu • Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Policy Body */}
        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          {/* Section 1 */}
          <section className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <h2 className="text-base font-bold text-navy flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              1. Overview
            </h2>
            <p className="mt-2.5">
              This Privacy Policy explains how <strong>Vignesh Technologies</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), located in Rajapalayam, Tamil Nadu, handles information received through our corporate website (<code>https://vigneshtechnologies.vercel.app</code>) and communication channels.
            </p>
          </section>

          {/* Section 2 */}
          <section className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <h2 className="text-base font-bold text-navy flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              2. Information We Collect
            </h2>
            <p className="mt-2.5">
              We collect information that you voluntarily provide when you submit an inquiry, request technical services, or ask about our IT training courses:
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1.5 pl-2">
              <li><strong>Contact Information:</strong> Full name, phone/WhatsApp number, and email address.</li>
              <li><strong>Inquiry Details:</strong> Project descriptions, service category selections, and message notes.</li>
              <li><strong>Communication Records:</strong> Correspondence sent to our official email address or telephone lines.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <h2 className="text-base font-bold text-navy flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              3. How We Use Information
            </h2>
            <p className="mt-2.5">
              Submitted information is used strictly for legitimate business purposes:
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1.5 pl-2">
              <li>Responding directly to your software project inquiries and quotation requests.</li>
              <li>Providing course details, batch schedules, and admission guidance for IT training.</li>
              <li>Administrative communication regarding ongoing client projects.</li>
            </ul>
            <p className="mt-3 font-medium text-navy">
              We do not sell, rent, or trade your contact information to any third parties for advertising or marketing campaigns.
            </p>
          </section>

          {/* Section 4 */}
          <section className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <h2 className="text-base font-bold text-navy flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              4. Website Analytics &amp; Cookies
            </h2>
            <p className="mt-2.5">
              Our website uses privacy-friendly web analytics provided by Vercel Analytics to monitor aggregate traffic patterns, visitor counts, and page load performance. These metrics are processed without user profiling or advertising tracking cookies.
            </p>
          </section>

          {/* Section 5 */}
          <section className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <h2 className="text-base font-bold text-navy flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              5. Circular Product Privacy Reference
            </h2>
            <p className="mt-2.5">
              <strong>Circular</strong> is a separate software product developed by Vignesh Technologies. User data, profiles, and interactions within the Circular mobile application or web platform (<code>https://circularapp.in</code>) are governed by Circular&apos;s dedicated Privacy Policy and Community Guidelines.
            </p>
          </section>

          {/* Section 6 */}
          <section className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <h2 className="text-base font-bold text-navy flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              6. Contact Information for Privacy Matters
            </h2>
            <p className="mt-2.5">
              For any questions regarding this Privacy Policy or your contact information, please reach out to us:
            </p>
            <div className="mt-4 flex flex-col gap-2 rounded-xl bg-secondary/50 p-4 text-xs">
              <div className="font-bold text-navy text-sm">Vignesh Technologies</div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4 text-primary shrink-0" />
                <span>Rajapalayam, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="size-4 text-primary shrink-0" />
                <a href="tel:+918122753620" className="hover:text-primary transition-colors">
                  +91 81227 53620
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="size-4 text-primary shrink-0" />
                <a href="mailto:vigneshtechnologyservice@gmail.com" className="hover:text-primary transition-colors">
                  vigneshtechnologyservice@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-border/80 bg-card py-6 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-4xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} Vignesh Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <Link href="/terms" className="hover:text-navy transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-primary font-semibold">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
