import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Trophy,
  Award,
  Users,
  School,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Heart,
  Presentation,
  CalendarDays,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Target,
  Download,
  Share2,
  Lightbulb,
  Building2,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Rajapalayam Taluk Student Innovation Challenge 2026 | Vignesh Technologies',
  description:
    'Official page for Rajapalayam Taluk Student Innovation Challenge 2026. Identify real problems, propose innovative solutions, submit ideas through Circular App, and compete for complimentary technology training and internships.',
  openGraph: {
    title: 'Rajapalayam Taluk Student Innovation Challenge 2026 | Vignesh Technologies',
    description:
      'Official page for Rajapalayam Taluk Student Innovation Challenge 2026. Identify real problems, propose innovative solutions, submit ideas through Circular App, and compete for complimentary technology training and internships.',
    url: 'https://vigneshtechnologies.vercel.app/competition',
    siteName: 'Vignesh Technologies',
    locale: 'en_IN',
    type: 'website',
  },
}

const playStoreLink =
  'https://play.google.com/store/apps/details?id=com.vigneshtechnologies.circular&hl=en_IN'

const circularWebsite = 'https://circularapp.in/'

const googleFormLink =
  'https://docs.google.com/forms/d/1N48u9GQm_UvDJ751OeB4B2LRGkauBmTuzpRqt4eHujA/viewform'

const categories = [
  {
    title: 'School – Classes 6–8',
    description:
      'Middle school students identifying everyday community problems and proposing creative, thoughtful solutions.',
    winners: '10 Winning Teams',
    opportunity: 'Complimentary App Development Training',
    icon: School,
    badge: 'Middle School',
  },
  {
    title: 'School – Classes 9–12',
    description:
      'High school students developing practical digital, tech, social, environmental, or community solutions.',
    winners: '10 Winning Teams',
    opportunity: 'Complimentary App Development Training',
    icon: GraduationCap,
    badge: 'High School',
  },
  {
    title: 'Arts & Science College',
    description:
      'Undergraduate and postgraduate students tackling real societal, educational, economic, or grassroots issues.',
    winners: '10 Winning Teams',
    opportunity: 'Complimentary Technology Internship',
    icon: Award,
    badge: 'Arts & Science',
  },
  {
    title: 'Engineering College',
    description:
      'Engineering students designing innovative digital, technological, AI, or system-level interventions.',
    winners: '10 Winning Teams',
    opportunity: 'Complimentary Technology Internship',
    icon: Sparkles,
    badge: 'Engineering',
  },
  {
    title: 'Polytechnic College',
    description:
      'Diploma students formulating hands-on technical, applied engineering, or practical neighborhood solutions.',
    winners: '10 Winning Teams',
    opportunity: 'Complimentary Technology Internship',
    icon: Trophy,
    badge: 'Polytechnic',
  },
]

const prizes = [
  {
    category: 'School – Classes 6–8',
    teams: '10 Winning Teams',
    reward: 'Complimentary App Development Training',
    provider: 'Vignesh Technologies',
  },
  {
    category: 'School – Classes 9–12',
    teams: '10 Winning Teams',
    reward: 'Complimentary App Development Training',
    provider: 'Vignesh Technologies',
  },
  {
    category: 'Arts & Science College',
    teams: '10 Winning Teams',
    reward: 'Complimentary Technology Internship',
    provider: 'Vignesh Technologies',
  },
  {
    category: 'Engineering College',
    teams: '10 Winning Teams',
    reward: 'Complimentary Technology Internship',
    provider: 'Vignesh Technologies',
  },
  {
    category: 'Polytechnic College',
    teams: '10 Winning Teams',
    reward: 'Complimentary Technology Internship',
    provider: 'Vignesh Technologies',
  },
]

const steps = [
  {
    step: '01',
    title: 'Identify a Real Problem',
    description:
      'Spot an authentic challenge in Rajapalayam Taluk — in education, local commerce, agriculture, public sanitation, environment, public safety, or community life.',
  },
  {
    step: '02',
    title: 'Create Your Innovative Solution',
    description:
      'Formulate a practical digital, technology, AI, social, environmental, or community solution. Note: Your solution does not have to be an app, and no prototype is compulsory.',
  },
  {
    step: '03',
    title: 'Join Circular App',
    description:
      'Install the Circular App from the Google Play Store or visit circularapp.in and register your free student account.',
  },
  {
    step: '04',
    title: 'Post Under Education Category',
    description:
      'Publish your idea on Circular under the "Education" category, outlining the problem, your proposed innovation, and how it helps the community.',
  },
  {
    step: '05',
    title: 'Submit Link via Registration Form',
    description:
      'Copy the web link of your Circular post and submit it through the official Google Form along with your student and institution details.',
  },
  {
    step: '06',
    title: 'Share & Build Community Support',
    description:
      'Share your Circular idea post with friends, classmates, teachers, family, and local neighbors. Earn up to 20 community support marks through verified likes.',
  },
]

const evaluationCriteria = [
  {
    title: 'Problem Identification',
    marks: 20,
    description:
      'Depth, clarity, relevance, and authenticity in identifying a real problem within Rajapalayam Taluk.',
    icon: Target,
  },
  {
    title: 'Innovation & Originality',
    marks: 25,
    description:
      'Creativity, uniqueness, and fresh thinking in the proposed digital, technology, social, or community concept.',
    icon: Lightbulb,
  },
  {
    title: 'Practicality & Feasibility',
    marks: 20,
    description:
      'Real-world usability, operational feasibility, and realistic logic behind implementing the solution.',
    icon: Zap,
  },
  {
    title: 'Local / Social Impact',
    marks: 15,
    description:
      'Tangible positive value, neighborhood improvement, or social benefit for people across Rajapalayam Taluk.',
    icon: ShieldCheck,
  },
  {
    title: 'Circular Community Support',
    marks: 20,
    description:
      '1 mark for every 10 likes on Circular (maximum 20 marks at 200 likes). All likes are verified by organizers.',
    icon: Heart,
  },
]

const timelineEvents = [
  {
    title: 'Competition Launch',
    date: '12 October 2026',
    description: 'Official announcement and opening of the challenge across Rajapalayam Taluk.',
  },
  {
    title: 'Registration Window',
    date: '12 October – 25 October 2026',
    description: 'Students register their individual or team participation.',
  },
  {
    title: 'Idea / Circular Submission',
    date: '12 October – 31 October 2026',
    description: 'Post idea on Circular under Education category and submit form link.',
  },
  {
    title: 'Community Support / Likes',
    date: '12 October – 7 November 2026',
    description: 'Share your post and gather verified community likes on Circular App.',
  },
  {
    title: 'Round 1 Evaluation',
    date: '8 November – 12 November 2026',
    description: 'Evaluation panel assesses problem, innovation, feasibility, impact & likes.',
  },
  {
    title: 'Finalists Announcement',
    date: '13 November 2026',
    description: 'Announcement of shortlisted teams advancing to the Grand Finale.',
  },
  {
    title: 'Finale Preparation Period',
    date: '13 November – 22 November 2026',
    description: 'Finalist teams prepare their 5–7 minute presentation and deck.',
  },
  {
    title: 'Grand Finale (Online Presentations)',
    date: '23 November – 27 November 2026',
    description: '5–7 minute online presentation followed by 3–5 minute Q&A before judges.',
  },
  {
    title: 'Results Announcement',
    date: '27 November 2026',
    description: 'Official declaration of the 50 winning teams across all 5 categories.',
  },
]

export default function CompetitionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-navy transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Vignesh Technologies</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={circularWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:inline-block"
            >
              Platform: circularapp.in
            </a>
            <a
              href={googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
            >
              <span>Register Now</span>
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-16 sm:py-24 border-b border-border/60">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <Trophy className="size-3.5" />
            <span>Organized by Vignesh Technologies • Rajapalayam, Tamil Nadu</span>
          </div>

          {/* Main Title */}
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl text-balance">
            RAJAPALAYAM TALUK
            <br />
            <span className="bg-gradient-to-r from-primary via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              STUDENT INNOVATION CHALLENGE 2026
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-5 text-lg font-medium text-navy/90 sm:text-xl text-balance">
            Identify a real problem. Propose an innovative solution. Share your idea on Circular.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            An open innovation challenge for students studying in educational institutions located strictly within <strong>Rajapalayam Taluk</strong>. Showcase your problem-solving talent and win complimentary technology training and internship opportunities.
          </p>

          {/* 4 Prominent Badges */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-3xl mx-auto">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center">
              <span className="block text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                Registration
              </span>
              <span className="mt-1 block text-lg font-black text-emerald-600 dark:text-emerald-400">
                FREE REGISTRATION
              </span>
              <span className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80">
                ₹0 Participation Fee
              </span>
            </div>

            <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 p-3 text-center">
              <span className="block text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider">
                Eligibility
              </span>
              <span className="mt-1 block text-lg font-black text-sky-600 dark:text-sky-400">
                5 CATEGORIES
              </span>
              <span className="text-[11px] text-sky-700/80 dark:text-sky-400/80">
                Schools &amp; Colleges
              </span>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-center">
              <span className="block text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                Prize Pool
              </span>
              <span className="mt-1 block text-lg font-black text-amber-600 dark:text-amber-400">
                50 WINNING TEAMS
              </span>
              <span className="text-[11px] text-amber-700/80 dark:text-amber-400/80">
                10 Teams Per Category
              </span>
            </div>

            <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 text-center">
              <span className="block text-xs font-bold text-violet-700 dark:text-violet-400 uppercase tracking-wider">
                Rewards
              </span>
              <span className="mt-1 block text-lg font-black text-violet-600 dark:text-violet-400">
                FREE OPPORTUNITIES
              </span>
              <span className="text-[11px] text-violet-700/80 dark:text-violet-400/80">
                Training &amp; Internships
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-[1.02]"
            >
              <span>REGISTER NOW</span>
              <ExternalLink className="size-4" />
            </a>

            <a
              href="#circular-submission"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy hover:bg-secondary transition-colors"
            >
              <span>HOW TO POST ON CIRCULAR</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About the Competition */}
      <section className="py-16 sm:py-20 border-b border-border/60 bg-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                About the Challenge
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                Inspiring Practical Problem Solvers in Rajapalayam Taluk
              </h2>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                The <strong>Rajapalayam Taluk Student Innovation Challenge 2026</strong> is a free online student innovation and problem-solving competition organized by Vignesh Technologies. It is built to motivate young minds to observe their local surroundings, identify authentic daily challenges, and propose creative, feasible solutions.
              </p>

              {/* Official Challenge Statement Box */}
              <div className="mt-6 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                  Official Challenge Statement
                </span>
                <p className="mt-2 text-base sm:text-lg font-bold text-navy italic">
                  &ldquo;Identify a real problem in Rajapalayam Taluk and propose an innovative solution.&rdquo;
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  <strong>Important:</strong> The solution does <em>not</em> have to be a software application. Students are encouraged to propose digital solutions, technology solutions, AI solutions, social solutions, educational interventions, agriculture innovations, environmental solutions, public safety initiatives, rural community solutions, or other practical ideas.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>No prototype is compulsory in any round. The focus is on authentic problem identification, innovation, and practical thinking.</span>
              </div>
            </div>

            {/* Quick Rules Card */}
            <div className="lg:col-span-4 rounded-2xl border border-border/80 bg-secondary/50 p-6">
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider">
                Participation Rules
              </h3>

              <ul className="mt-4 space-y-3 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Geographic Scope:</strong> Only students studying in institutions within Rajapalayam Taluk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Team Size:</strong> Individual participation or teams of maximum 2 students.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                  <span><strong>No Team Limits:</strong> No limit on the number of teams participating from any institution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Rounds:</strong> Exactly 2 rounds (Circular Idea Submission &amp; Online Presentation).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Zero Cost:</strong> 100% Free entry. No fee at any stage.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Categories */}
      <section className="py-16 sm:py-20 border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Eligibility &amp; Groups
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              5 Participation Categories
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Every category competes independently with dedicated evaluation and its own 10 winning team allocations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, idx) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                      Category {idx + 1} • {cat.badge}
                    </span>
                    <cat.icon className="size-5 text-primary" />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-navy">
                    {cat.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-amber-600 dark:text-amber-400">
                      {cat.winners}
                    </span>
                    <span className="text-[11px] text-muted-foreground text-right font-medium">
                      {cat.opportunity}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* General Team Rule Box */}
            <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                  Team Formation Rules
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">
                  Flexible Participation
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Participate individually or as a team of 2 students. Students in a team must belong to the same institution. There is no ceiling on how many students or teams an institution can send.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-primary/20 text-xs font-semibold text-primary">
                Individual or Maximum 2 Students Per Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 6-Step Visual Process */}
      <section className="py-16 sm:py-20 border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Step-by-Step Flow
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Follow this 6-step journey from spotting a problem to presenting your final idea before judges.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((st) => (
              <div
                key={st.step}
                className="relative rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-2xl font-black text-primary/30">
                    {st.step}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-navy">
                    {st.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Community Support Section */}
      <section id="circular-submission" className="py-16 sm:py-24 border-b border-border/60 bg-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/40 p-6 sm:p-10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3.5 py-1 text-xs font-bold text-rose-600 dark:text-rose-400">
                <Heart className="size-3.5 fill-rose-500 text-rose-500" />
                <span>Round 1 Submission &amp; Community Validation</span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                GET COMMUNITY SUPPORT ON CIRCULAR
              </h2>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Circular is the official platform used for Round 1 idea submission and community support. Post your idea under the <strong>Education</strong> category on Circular App, share the link, and engage your local community.
              </p>
            </div>

            {/* Likes-to-Marks Conversion Card */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
                <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Conversion Ratio
                </span>
                <span className="mt-2 block text-2xl font-black text-primary">
                  10 Likes = 1 Mark
                </span>
                <span className="mt-1 block text-[11px] text-muted-foreground">
                  Earned steadily with community support
                </span>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
                <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Maximum Target
                </span>
                <span className="mt-2 block text-2xl font-black text-rose-600 dark:text-rose-400">
                  200 Likes = 20 Marks
                </span>
                <span className="mt-1 block text-[11px] text-muted-foreground">
                  Full marks in community support
                </span>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
                <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Evaluation Cap
                </span>
                <span className="mt-2 block text-2xl font-black text-navy">
                  20 Marks Max
                </span>
                <span className="mt-1 block text-[11px] text-muted-foreground">
                  Likes verified by organizers
                </span>
              </div>
            </div>

            {/* Detailed Community Guidelines Box */}
            <div className="mt-8 rounded-2xl bg-secondary/60 p-6 border border-border/80">
              <h3 className="text-sm font-bold text-navy flex items-center gap-2">
                <Share2 className="size-4 text-primary" />
                <span>How Community Engagement Works</span>
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Participants are warmly encouraged to share their Circular idea post with friends, classmates, teachers, family, and the local community to earn likes.
                <strong> Note:</strong> Community support contributes 20 marks out of 100. Likes alone do <em>not</em> determine the winners — the remaining 80 marks are rigorously evaluated by judges based on problem identification (20), innovation &amp; originality (25), practicality (20), and local social impact (15). All like counts will be directly verified by the organizers to ensure fair, authentic engagement.
              </p>
            </div>

            {/* Circular App Download & QR Column */}
            <div className="mt-8 pt-8 border-t border-border/80 grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 flex flex-col sm:flex-row items-center gap-5">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl border border-border bg-white shadow-sm p-1">
                  <Image
                    src="/circular-logo.png"
                    alt="Circular App Logo"
                    width={80}
                    height={80}
                    className="size-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-navy">
                    Circular – Official Submission Platform
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Install Circular on your Android device from Google Play or access via the web app. Available 100% free of charge.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <a
                      href={playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-navy/90 transition-colors"
                    >
                      <Download className="size-3.5" />
                      <span>Google Play Store</span>
                    </a>
                    <a
                      href={circularWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-navy hover:bg-secondary transition-colors"
                    >
                      <ExternalLink className="size-3.5" />
                      <span>Web: circularapp.in</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center p-3 rounded-xl bg-card border border-border">
                <Image
                  src="/circular-qr.png"
                  alt="Circular App Download QR Code"
                  width={110}
                  height={110}
                  className="rounded-lg"
                />
                <span className="mt-2 text-[10px] font-medium text-muted-foreground">
                  Scan to Download Circular
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Round 1 Evaluation Matrix - 100 Marks */}
      <section className="py-16 sm:py-20 border-b border-border/60 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Scoring System
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              Round 1 Evaluation Matrix
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Evaluated transparently across 5 key pillars totaling 100 marks.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs">
            <div className="divide-y divide-border/70">
              {evaluationCriteria.map((item) => (
                <div
                  key={item.title}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 p-2.5 text-primary shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground max-w-xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="inline-block rounded-xl bg-secondary px-3.5 py-1.5 text-sm font-black text-navy border border-border/60">
                      {item.marks} Marks
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Footer */}
            <div className="bg-primary/5 p-6 border-t border-border flex items-center justify-between">
              <div>
                <span className="block text-sm font-bold text-navy">Total Evaluation Score</span>
                <span className="text-xs text-muted-foreground">Comprehensive judging evaluation + verified community support</span>
              </div>
              <span className="text-xl font-black text-primary">
                100 MARKS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Round Competition Process */}
      <section className="py-16 sm:py-20 border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Stages of Competition
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              Competition Round Structure
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              A structured 2-round online competition designed to be accessible and rewarding.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Round 1 Card */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
                  <span>Round 1</span>
                </div>
                <h3 className="text-xl font-bold text-navy">
                  Circular Idea Submission &amp; Community Support
                </h3>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  Students identify a real-world problem and articulate their innovative solution. Post the idea on Circular App under the <strong>Education</strong> category, copy the link, and complete the official Google Form registration.
                </p>

                <div className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Post idea under Education category on Circular App.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Submit post link via Google Form with participant details.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Build community support (10 likes = 1 mark up to 20 marks).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>No prototype compulsory.</strong></span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 text-xs text-primary font-semibold">
                Submission Window: 12 – 31 October 2026
              </div>
            </div>

            {/* Round 2 Card */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                  <span>Round 2 (Grand Finale)</span>
                </div>
                <h3 className="text-xl font-bold text-navy">
                  Online Final Presentation
                </h3>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  Shortlisted finalist teams prepare a presentation deck and present their innovation online before a panel of expert evaluators and mentors from Vignesh Technologies.
                </p>

                <div className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Presentation className="size-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Presentation:</strong> 5–7 minutes to present the problem and solution.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="size-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Q&amp;A Session:</strong> 3–5 minutes interaction with judges.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Mode:</strong> 100% Online via video conference.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>No prototype compulsory.</strong> Conceptual depth is key.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                Finale Window: 23 – 27 November 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prize Pool - 50 Winning Teams */}
      <section className="py-16 sm:py-24 border-b border-border/60 bg-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Rewards &amp; Opportunities
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">
              50 WINNING TEAMS
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Vignesh Technologies is proud to sponsor genuine career-building technical opportunities for 50 winning teams across the 5 categories.
            </p>
          </div>

          {/* Allocation Cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {prizes.map((p) => (
              <div
                key={p.category}
                className="rounded-2xl border border-border/80 bg-background p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {p.category}
                  </span>
                  <p className="mt-1 text-lg font-bold text-navy">
                    {p.teams}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-primary">
                    {p.reward}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-muted-foreground">
                  Provided by {p.provider}
                </div>
              </div>
            ))}

            {/* Total Summary Card */}
            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-5 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  Grand Total
                </span>
                <p className="mt-1 text-lg font-bold text-navy">
                  50 Winning Teams Total
                </p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  10 winning teams in every single category receive complimentary training or internship opportunities.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-primary/20 text-[11px] font-bold text-navy">
                Equal representation across all 5 categories
              </div>
            </div>
          </div>

          {/* Mandatory Inclusion Note */}
          <div className="mt-6 rounded-xl bg-secondary/60 p-4 border border-border text-center">
            <p className="text-xs font-semibold text-navy">
              Every student who is a member of a selected winning team receives the applicable opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates & Special Institution Recognition */}
      <section className="py-16 sm:py-20 border-b border-border/60 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Student Certificates */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <Award className="size-6 text-primary" />
                  <h3 className="text-lg font-bold text-navy">
                    Certificates for Participants
                  </h3>
                </div>

                <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                  Every qualified student participant will receive an official verifiable digital credential issued by Vignesh Technologies to commemorate their effort, problem analysis, and participation.
                </p>

                <ul className="mt-6 space-y-3 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Official Certificates of Participation</strong> for all qualified registered teams submitting valid Round 1 entries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Official Certificates of Merit</strong> for selected winners and finalists across all categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Complimentary technology training &amp; internship onboarding credentials.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Institution Recognition */}
            <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/40 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <Building2 className="size-6 text-primary" />
                  <h3 className="text-lg font-bold text-navy">
                    Special Institution Recognition
                  </h3>
                </div>

                <div className="mt-4 rounded-xl bg-amber-500/10 border border-amber-500/20 p-4">
                  <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                    Institutional Benchmark
                  </span>
                  <p className="mt-1 text-lg font-black text-amber-600 dark:text-amber-400">
                    100+ VERIFIED STUDENT PARTICIPANTS
                  </p>
                </div>

                <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                  Schools, Arts &amp; Science colleges, Engineering institutions, and Polytechnic colleges located within Rajapalayam Taluk that achieve <strong>100 or more verified student participants</strong> will be honored with:
                </p>

                <div className="mt-4 rounded-lg bg-card p-3 border border-border text-center">
                  <span className="text-xs font-bold text-navy uppercase tracking-wider">
                    SPECIAL INSTITUTION RECOGNITION
                  </span>
                </div>

                <p className="mt-3 text-[11px] text-muted-foreground">
                  *Recognition is based strictly on <em>verified student participants</em> who complete valid Round 1 submissions, not merely registered names.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Timeline */}
      <section className="py-16 sm:py-24 border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <CalendarDays className="size-3.5" />
              <span>Official Schedule</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              Competition Timeline 2026
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Please note these official milestone dates for the Rajapalayam Taluk Student Innovation Challenge 2026.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs">
            <div className="divide-y divide-border/60">
              {timelineEvents.map((ev, index) => (
                <div
                  key={ev.title}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-secondary/40 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary mt-0.5">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-navy">
                        {ev.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {ev.description}
                      </p>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0 pl-10 sm:pl-0">
                    <span className="inline-block rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-semibold text-navy border border-border/60">
                      {ev.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Innovate? Final CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-card via-background to-primary/5">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary mb-6">
            <Target className="size-7" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">
            READY TO INNOVATE?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
            Spot a real problem in Rajapalayam Taluk. Propose your innovative solution. Submit your idea on Circular and represent your institution proudly.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-[1.02]"
            >
              <span>REGISTER NOW</span>
              <ExternalLink className="size-4" />
            </a>

            <a
              href="#circular-submission"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-6 py-3.5 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              <span>POST YOUR IDEA ON CIRCULAR</span>
              <ArrowRight className="size-4" />
            </a>

            <a
              href={circularWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3.5 text-sm font-semibold text-navy hover:bg-secondary transition-colors"
            >
              <span>VISIT CIRCULAR</span>
              <ExternalLink className="size-4" />
            </a>
          </div>

          {/* Official Contact Box */}
          <div className="mt-12 rounded-2xl border border-border/80 bg-card p-6 max-w-xl mx-auto text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary text-center">
              Official Organizer &amp; Contact Information
            </h3>
            <p className="mt-2 text-center text-sm font-bold text-navy">
              Vignesh Technologies
            </p>
            <p className="text-center text-xs text-muted-foreground">
              Rajapalayam, Tamil Nadu, India
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-xs">
              <a
                href="tel:+918122753620"
                className="flex items-center gap-2.5 rounded-lg bg-secondary/50 p-2.5 text-navy hover:text-primary transition-colors"
              >
                <Phone className="size-4 text-primary shrink-0" />
                <span>+91 8122753620</span>
              </a>

              <a
                href="mailto:circular.vigneshtechnologies@gmail.com"
                className="flex items-center gap-2.5 rounded-lg bg-secondary/50 p-2.5 text-navy hover:text-primary transition-colors break-all"
              >
                <Mail className="size-4 text-primary shrink-0" />
                <span>circular.vigneshtechnologies@gmail.com</span>
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Company Website
              </Link>
              <span>•</span>
              <a href={circularWebsite} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Circular Platform
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}