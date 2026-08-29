import { CircularHeader } from '@/components/circular-header'
import { HeroSection } from '@/components/landing/hero-section'
import { WhatIsCircular } from '@/components/landing/what-is-circular'
import { KeyFeatures } from '@/components/landing/key-features'
import { HowItWorks } from '@/components/landing/how-it-works'
import { BusinessSection } from '@/components/landing/business-section'
import { CommunitySection } from '@/components/landing/community-section'
import { AppDownloadSection } from '@/components/landing/app-download-section'
import { TrustAndSafety } from '@/components/landing/trust-and-safety'
import { CircularFooter } from '@/components/circular-footer'

export default function CircularHomePage() {
  return (
    <>
      <CircularHeader />
      <main>
        <HeroSection />
        <WhatIsCircular />
        <KeyFeatures />
        <HowItWorks />
        <BusinessSection />
        <CommunitySection />
        <AppDownloadSection />
        <TrustAndSafety />
      </main>
      <CircularFooter />
    </>
  )
}