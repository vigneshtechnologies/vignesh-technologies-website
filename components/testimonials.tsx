import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Karthik Raja',
    role: 'Business Owner, Rajapalayam',
    review:
      'Vignesh Technologies built our business website quickly and professionally. Our customers can now find us online easily. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Lakshmi',
    role: 'Python Course Student',
    review:
      'The Python training was very practical. The trainers explain everything clearly, and I got hands-on experience with real projects.',
    rating: 5,
  },
  {
    name: 'Suresh Kumar',
    role: 'Shop Owner & Circular App User',
    review:
      'The Circular app helps me promote my shop to the local community. Posting offers and events is very simple and effective.',
    rating: 4,
  },
]

function Rating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rated ${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < count ? 'fill-primary text-primary' : 'text-border'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Testimonials</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
            What Our Clients &amp; Students Say
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <Rating count={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.review}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
