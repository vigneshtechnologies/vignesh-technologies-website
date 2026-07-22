import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="home" className="bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            Software Solutions • IT Training • Digital Services
          </p>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl">
            Empowering Businesses Through{' '}
            <span className="text-primary">Innovative Technology</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Vignesh Technologies provides software solutions, mobile
            applications, websites, IT training, and digital services to help
            you grow with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#services">
              <Button size="lg">
                Explore Services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </Link>

            <Link href="#products">
              <Button size="lg" variant="outline">
                <Smartphone className="size-4" aria-hidden="true" />
                View Circular App
              </Button>
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-sm text-muted-foreground">
                Projects Delivered
              </dt>
              <dd className="text-2xl font-bold text-navy">50+</dd>
            </div>

            <div>
              <dt className="text-sm text-muted-foreground">
                Students Trained
              </dt>
              <dd className="text-2xl font-bold text-navy">200+</dd>
            </div>

            <div>
              <dt className="text-sm text-muted-foreground">
                Happy Clients
              </dt>
              <dd className="text-2xl font-bold text-navy">40+</dd>
            </div>
          </dl>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/hero-tech.png"
              alt="Software development team at Vignesh Technologies working on laptops"
              width={640}
              height={480}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}