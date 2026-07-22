import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { CircularApp } from '@/components/circular-app'
import { Competition } from '@/components/competition'
import { Courses } from '@/components/courses'
import { Projects } from '@/components/projects'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <About />
        <Services />
        <CircularApp />
        <Competition />
        <Courses />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>

      <SiteFooter />
    </>
  )
}