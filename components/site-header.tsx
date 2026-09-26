'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Product', href: '#product' },
  { label: 'Projects', href: '#projects' },
  { label: 'Academy', href: '#courses' },
  { label: 'About', href: '#about' },
  { label: 'Initiatives', href: '#initiatives' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="#home" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1">
          <div className="relative size-11 overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200/80 p-0.5 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Vignesh Technologies Logo"
              width={44}
              height={44}
              className="size-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-navy leading-none">
              Vignesh <span className="text-primary">Technologies</span>
            </span>
            <span className="text-[11px] font-medium tracking-wider text-muted-foreground uppercase mt-1">
              Build • Innovate • Learn
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-4 py-1.5 shadow-xs" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/918122753620"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-semibold text-navy transition-colors hover:bg-accent hover:border-primary/40"
          >
            <MessageSquare className="size-3.5 text-[#25D366]" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+918122753620"
            className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-primary"
            aria-label="Call Vignesh Technologies"
          >
            <Phone className="size-4" />
          </a>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background/98 px-4 pt-3 pb-6 shadow-xl lg:hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-2.5">
            <a
              href="https://wa.me/918122753620"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card py-2.5 text-xs font-semibold text-navy hover:bg-accent"
            >
              <MessageSquare className="size-4 text-[#25D366]" />
              WhatsApp
            </a>

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 rounded-lg bg-primary py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Contact Us
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}