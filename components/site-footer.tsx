import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground border-t border-navy-foreground/10">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Positioning Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="size-11 overflow-hidden rounded-xl bg-white p-0.5 shadow-sm border border-slate-200">
                <Image
                  src="/logo.png"
                  alt="Vignesh Technologies Logo"
                  width={44}
                  height={44}
                  className="size-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Vignesh <span className="text-primary-foreground/90">Technologies</span>
              </span>
            </Link>

            <p className="mt-4 text-xs text-navy-foreground/75 leading-relaxed max-w-sm">
              Vignesh Technologies is a technology company based in Rajapalayam, Tamil Nadu, dedicated to engineering custom software, websites, mobile applications, and providing professional IT training.
            </p>

            <div className="mt-5 rounded-lg border border-navy-foreground/15 bg-navy-foreground/5 p-3 text-xs max-w-sm">
              <span className="font-semibold text-white block">Flagship Product:</span>
              <a
                href="https://circularapp.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-primary-foreground hover:underline"
              >
                <span>Circular — Hyperlocal Community Platform</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="#home" className="text-navy-foreground/75 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-navy-foreground/75 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#product" className="text-navy-foreground/75 hover:text-white transition-colors">
                  Circular Product
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-navy-foreground/75 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-navy-foreground/75 hover:text-white transition-colors">
                  IT Academy
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-navy-foreground/75 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#initiatives" className="text-navy-foreground/75 hover:text-white transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-navy-foreground/75 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-xs text-navy-foreground/75">
              <li>Software Development</li>
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Graphic Design</li>
              <li>AI Solutions</li>
              <li>Digital Solutions</li>
              <li>IT Training</li>
            </ul>
          </div>

          {/* Contact Details Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact Info</h4>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex items-start gap-2.5 text-navy-foreground/80">
                <MapPin className="size-4 shrink-0 text-primary-foreground mt-0.5" />
                <span>Rajapalayam, Tamil Nadu, India</span>
              </li>
              <li>
                <a
                  href="tel:+918122753620"
                  className="flex items-center gap-2.5 text-navy-foreground/80 hover:text-white transition-colors"
                >
                  <Phone className="size-4 shrink-0 text-primary-foreground" />
                  <span>+91 81227 53620</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:vigneshtechnologyservice@gmail.com"
                  className="flex items-start gap-2.5 text-navy-foreground/80 hover:text-white transition-colors break-all"
                >
                  <Mail className="size-4 shrink-0 text-primary-foreground mt-0.5" />
                  <span>vigneshtechnologyservice@gmail.com</span>
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/competition"
                className="inline-flex items-center gap-1.5 text-xs text-primary-foreground hover:underline"
              >
                <span>Student Innovation Challenge 2026</span>
                <ExternalLink className="size-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-navy-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Vignesh Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <a href="#home" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <span>Back to Top</span>
              <ArrowUp className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
