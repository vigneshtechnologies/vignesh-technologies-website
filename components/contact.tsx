'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
            Contact Us
          </p>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Let&apos;s Build Something Great Together
          </h2>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Have a project idea or want to join a course? Reach out and
            we&apos;ll get back to you.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">
                Vignesh Technologies
              </h3>

              <ul className="mt-5 flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Rajapalayam, Tamil Nadu, India
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>

                  <a
                    href="tel:+918122753620"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    +91 81227 53620
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>

                  <a
                    href="mailto:vigneshtechnologyservice@gmail.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    vigneshtechnologyservice@gmail.com
                  </a>
                </li>
              </ul>

              <a
                href="https://wa.me/918122753620"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block"
              >
                <Button className="w-full bg-[#25D366] text-white hover:bg-[#1eb857]">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            <div className="rounded-xl bg-navy p-6 text-navy-foreground">
              <h3 className="text-lg font-semibold">Business Hours</h3>

              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/80">
                Monday to Saturday: 9:00 AM - 7:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2
                  className="size-12 text-primary"
                  aria-hidden="true"
                />

                <h3 className="text-xl font-semibold text-navy">
                  Message Sent!
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-navy"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-navy"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-navy"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-navy"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project or course interest..."
                    className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>

                <Button type="submit" size="lg">
                  <Send className="size-4" aria-hidden="true" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}