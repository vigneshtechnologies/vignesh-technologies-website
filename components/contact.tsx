'use client'

import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react'

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [inquiryType, setInquiryType] = useState('Software Development')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const encodedWhatsAppMessage = encodeURIComponent(
    `Hello Vignesh Technologies,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nCategory: ${inquiryType}\n\nRequirements:\n${formData.message}`
  )

  const encodedEmailSubject = encodeURIComponent(
    `Inquiry: ${inquiryType} - ${formData.name}`
  )

  const encodedEmailBody = encodeURIComponent(
    `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nCategory: ${inquiryType}\n\nProject/Course Requirements:\n${formData.message}`
  )

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
            Get in Touch
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl text-balance">
            Contact Vignesh Technologies
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Have a software project to develop, a business website requirement, or questions about our IT training courses? Reach out to our team directly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 items-start">
          {/* Direct Communication Channels (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Phone Card */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/10 text-primary shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Direct Telephone</h3>
                  <a
                    href="tel:+918122753620"
                    className="mt-1 block text-lg font-bold text-navy hover:text-primary transition-colors"
                  >
                    +91 81227 53620
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60">
                <a
                  href="tel:+918122753620"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Click to call now</span>
                  <ArrowUpRight className="size-3" />
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/10 p-6 shadow-2xs">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0">
                  <MessageSquare className="size-5 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Instant WhatsApp</h3>
                  <p className="mt-1 text-sm font-semibold text-navy">Chat directly with our team</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-500/20">
                <a
                  href="https://wa.me/918122753620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageSquare className="size-4" />
                  <span>Start WhatsApp Chat (+91 81227 53620)</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 shrink-0">
                  <Mail className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Official Email</h3>
                  <a
                    href="mailto:vigneshtechnologyservice@gmail.com"
                    className="mt-1 block text-sm font-bold text-navy truncate hover:text-primary transition-colors"
                  >
                    vigneshtechnologyservice@gmail.com
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60">
                <a
                  href="mailto:vigneshtechnologyservice@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Send an email inquiry</span>
                  <ArrowUpRight className="size-3" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-slate-500/10 text-slate-700 dark:text-slate-300 shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</h3>
                  <p className="mt-1 text-sm font-bold text-navy">Rajapalayam, Tamil Nadu, India</p>
                  <p className="mt-1 text-xs text-muted-foreground">Serving clients locally and remotely.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Inquiries Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy">Inquiry Form</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Fill out your requirements below to connect directly with our technical team in Rajapalayam.
              </p>

              {formSubmitted ? (
                <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-6 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-emerald-500 text-white shrink-0">
                      <CheckCircle2 className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-navy">
                        Inquiry Details Prepared, {formData.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Category: <span className="font-semibold text-navy">{inquiryType}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                    Click either button below to transmit your pre-filled inquiry directly to Vignesh Technologies via your preferred channel:
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={`https://wa.me/918122753620?text=${encodedWhatsAppMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#20bd5a] transition-colors"
                    >
                      <MessageSquare className="size-4" />
                      <span>Send via WhatsApp</span>
                      <ExternalLink className="size-3" />
                    </a>

                    <a
                      href={`mailto:vigneshtechnologyservice@gmail.com?subject=${encodedEmailSubject}&body=${encodedEmailBody}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 transition-colors"
                    >
                      <Mail className="size-4" />
                      <span>Send via Email Client</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>

                  <div className="mt-5 pt-4 border-t border-emerald-500/20 text-center">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-medium text-primary hover:underline"
                    >
                      &larr; Edit details or submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Inquiry Type Selectors */}
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-2">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'Software Development',
                        'Website Development',
                        'Mobile App Development',
                        'IT Training / Courses',
                        'AI / Digital Solutions',
                        'Other Inquiries',
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          className={`rounded-lg border px-3 py-2 text-xs font-medium text-left transition-colors ${
                            inquiryType === type
                              ? 'border-primary bg-primary/10 text-primary font-semibold'
                              : 'border-border bg-secondary/40 text-muted-foreground hover:bg-secondary'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-navy mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kumar"
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-navy mb-1.5">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-navy mb-1.5">
                      Email Address <span className="text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourname@domain.com"
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-navy mb-1.5">
                      Project or Course Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe what you are looking to build or the course you want to join..."
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <Send className="size-3.5" />
                    <span>Prepare Inquiry for Vignesh Technologies</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}