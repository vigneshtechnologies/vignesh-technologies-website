import Link from 'next/link'
import {
  Trophy,
  Users,
  Smartphone,
  School,
  FileText,
  ArrowRight,
  CalendarDays,
  Award,
} from 'lucide-react'
import { Button } from '@/components/ui/button'


const googleFormLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSeKTu-0pN-Woux4_DNd9zpC2YkAZp_hwMnkl_dKYJui1foNZA/viewform?usp=header'


const highlights = [
  {
    icon: School,
    title: 'Virudhunagar District Edition',
    description:
      'Open to all schools across Virudhunagar District.',
  },
  {
    icon: Smartphone,
    title: 'Online Innovation Challenge',
    description:
      'Students showcase innovative app ideas using Circular App.',
  },
  {
    icon: Users,
    title: 'Classes 6 - 12',
    description:
      'Individual or team participation. Maximum 2 students per team.',
  },
  {
    icon: Award,
    title: '₹1.5 Lakh Training Opportunity',
    description:
      'Top 5 teams receive app development training benefits.',
  },
]


const importantDates = [
  {
    title: 'Registration Opens',
    date: '27 July 2026',
  },
  {
    title: 'Last Date for Round 1 Submission',
    date: '12 August 2026',
  },
  {
    title: 'Top 20 Teams Announcement',
    date: '18 August 2026',
  },
  {
    title: 'PPT Preparation Period',
    date: '19 - 27 August 2026',
  },
  {
    title: 'Online Presentation',
    date: '28 - 30 August 2026',
  },
]


export function Competition() {
  return (
    <section
      id="competition"
      className="bg-primary/5"
    >

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">


        <div className="mx-auto max-w-3xl text-center">


          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">

            <Trophy className="h-7 w-7" />

          </div>



          <p className="text-sm font-semibold uppercase tracking-wide text-primary">

            Upcoming Event

          </p>



          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">

            Circular App Innovation Challenge 2026

          </h2>



          <p className="mt-3 text-lg font-medium text-primary">

            Virudhunagar District Edition

          </p>




          <p className="mt-5 leading-relaxed text-muted-foreground">

            An online district-level innovation challenge by Vignesh Technologies
            where school students showcase app ideas, creativity and
            problem-solving skills using Circular App.

          </p>


        </div>





        {/* Highlights */}


        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


          {highlights.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >


              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">

                <item.icon className="h-6 w-6" />

              </div>



              <h3 className="mt-4 font-semibold text-navy">

                {item.title}

              </h3>



              <p className="mt-2 text-sm text-muted-foreground">

                {item.description}

              </p>


            </div>

          ))}


        </div>





        {/* Important Dates */}


        <div className="mx-auto mt-14 max-w-5xl rounded-2xl border bg-card p-6 shadow-sm">


          <div className="flex items-center justify-center gap-2">

            <CalendarDays className="h-6 w-6 text-primary" />

            <h3 className="text-xl font-bold text-navy">

              Important Dates

            </h3>

          </div>




          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">


            {importantDates.map((item) => (

              <div
                key={item.title}
                className="rounded-xl bg-primary/5 p-4 text-center"
              >

                <p className="text-sm font-semibold text-navy">

                  {item.title}

                </p>


                <p className="mt-2 text-sm text-primary">

                  {item.date}

                </p>


              </div>

            ))}


          </div>


        </div>





        {/* Prize Highlight */}


        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-primary p-8 text-center text-white">


          <h3 className="text-2xl font-bold">

            🏆 ₹1,50,000 Worth App Development Training Program

          </h3>



          <p className="mt-3">

            Top 5 winning teams will receive professional app development
            training benefits.

          </p>


        </div>





        {/* Buttons */}


        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">


          <a
            href={googleFormLink}
            target="_blank"
          >

            <Button size="lg">

              Register Now

            </Button>


          </a>




          <Link href="/competition">


            <Button size="lg" variant="outline">

              View Competition Details

              <ArrowRight className="ml-2 h-4 w-4" />

            </Button>


          </Link>





          <a
            href="/brochure.pdf"
            target="_blank"
          >

            <Button size="lg" variant="outline">

              <FileText className="mr-2 h-4 w-4" />

              Download Brochure

            </Button>


          </a>


        </div>


      </div>

    </section>
  )
}