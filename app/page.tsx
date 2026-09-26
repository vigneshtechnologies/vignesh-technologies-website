import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { CircularShowcase } from '@/components/circular-showcase'
import { Projects } from '@/components/projects'
import { Courses } from '@/components/courses'
import { About } from '@/components/about'
import { Initiatives } from '@/components/initiatives'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <CircularShowcase />
        <Projects />
        <Courses />
        <About />
        <Initiatives />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}