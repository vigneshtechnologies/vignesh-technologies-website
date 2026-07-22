import Link from 'next/link'
import {
  Trophy,
  Users,
  Smartphone,
  School,
  FileCheck,
  Award,
  Lightbulb,
  Target,
  ArrowLeft,
  FileText,
  BadgeCheck,
  Presentation,
  ClipboardList,
  Download,
} from 'lucide-react'

import { Button } from '@/components/ui/button'


const playStoreLink =
  'https://play.google.com/store/apps/details?id=com.vigneshtechnologies.circular&hl=en_IN'


const eligibility = [
  'Students studying Classes 6 to 12',
  'Open to all schools across Virudhunagar District',
  'Individual participation or team participation',
  'Maximum 2 students per team',
  'Each participant/team must have a mentor teacher',
]


const rounds = [
  {
    icon: Smartphone,
    title: 'Round 1: Circular Idea Submission',
    description:
      'Students download Circular App and post their innovative app idea. Participation can be individual or as a team with maximum 2 students.',
  },
  {
    icon: Users,
    title: 'Student & Mentor Posts',
    description:
      'Students must post their idea on Circular. The mentor/teacher must also post the same idea on Circular for verification.',
  },
  {
    icon: FileCheck,
    title: 'Google Form Submission',
    description:
      'Submit Circular post screenshots along with student, school and mentor details through the official Google Form.',
  },
  {
    icon: Trophy,
    title: 'Top 20 Team Selection',
    description:
      'The best 20 teams will be selected based on creativity, innovation and quality of ideas.',
  },
  {
    icon: Presentation,
    title: 'Round 2: Online Presentation',
    description:
      'Selected teams prepare a PPT and present their app idea through Google Meet during their allotted time slot.',
  },
]


const judging = [
  'Innovation and uniqueness of the idea',
  'Problem identification and solution approach',
  'Practical usefulness of the application',
  'Presentation quality and clarity',
]


export default function CompetitionPage() {

  return (
    <main className="bg-background">


      {/* Hero Section */}

      <section className="bg-primary/5">

        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6 md:py-24">


          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">

            <Trophy className="h-8 w-8" />

          </div>


          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary">

            Vignesh Technologies Presents

          </p>


          <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">

            Circular App Development Challenge 2026

          </h1>


          <p className="mt-4 text-xl font-bold text-primary">

            Virudhunagar District Edition

          </p>



          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-muted-foreground">

            A district-level innovation challenge for school students to
            showcase app ideas, creativity and problem-solving skills using
            Circular App.

          </p>



          {/* Main Marketing Cards */}

          <div className="mt-8 flex flex-col justify-center gap-5 md:flex-row">


            <div className="rounded-2xl bg-green-100 px-10 py-6">

              <p className="text-sm font-bold text-green-700">

                REGISTRATION

              </p>


              <p className="text-5xl font-black text-green-700">

                FREE

              </p>


              <p className="text-sm text-green-700">

                No Participation Fee

              </p>


            </div>




            <div className="rounded-2xl bg-primary px-10 py-6 text-white">


              <p className="text-sm font-bold">

                WINNER BENEFITS

              </p>


              <p className="text-5xl font-black">

                ₹1.5 Lakh

              </p>


              <p className="text-sm">

                Worth Training Program

              </p>


            </div>


          </div>




          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">


            <Button size="lg">

              Register Now

            </Button>



            <a href="/brochure.pdf" target="_blank">

              <Button size="lg" variant="outline">

                <FileText className="mr-2 h-4 w-4" />

                Download Brochure

              </Button>


            </a>


          </div>




          {/* Circular App Download Card - Logo Place 1 */}


          <div className="mx-auto mt-12 max-w-md rounded-2xl border bg-card p-6">


            <img

              src="/circular-logo.png"

              alt="Circular App"

              className="mx-auto h-20 w-20 rounded-2xl"

            />



            <h3 className="mt-4 text-xl font-bold text-navy">

              Download Circular App

            </h3>



            <p className="mt-2 text-sm text-muted-foreground">

              Install Circular App to post your idea and participate in the
              competition.

            </p>




            <img

              src="/circular-qr.png"

              alt="Circular App QR Code"

              className="mx-auto mt-5 h-40 w-40 rounded-lg border"

            />




            <a

              href={playStoreLink}

              target="_blank"

              className="mt-5 block"

            >

              <Button className="w-full">

                <Download className="mr-2 h-4 w-4" />

                Download from Play Store

              </Button>


            </a>



          </div>


        </div>

      </section>





      {/* About Section */}


      <section>


        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">



          {/* Circular Logo Place 2 */}

          <div className="flex items-center gap-4">

            <img

              src="/circular-logo.png"

              alt="Circular App"

              className="h-14 w-14 rounded-xl"

            />

            <h2 className="text-3xl font-bold text-navy">

              About the Competition

            </h2>


          </div>





          <p className="mt-5 leading-relaxed text-muted-foreground">


            Circular App Development Challenge 2026 is an initiative by
            Vignesh Technologies to encourage young innovators. Students get
            an opportunity to present their ideas, identify real-world problems
            and showcase their creativity.


          </p>




          <p className="mt-4 leading-relaxed text-muted-foreground">


            The competition focuses on innovation, problem-solving and
            presentation skills rather than only coding knowledge.


          </p>



        </div>


      </section>





      {/* Highlights Section */}


      <section className="bg-muted/30">


        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">


          <h2 className="text-3xl font-bold text-navy">

            Competition Highlights

          </h2>



          <div className="mt-8 grid gap-6 md:grid-cols-4">


            {[
              ['Virudhunagar District Level', School],
              ['Classes 6 - 12', Users],
              ['100% Free Registration', BadgeCheck],
              ['Innovation Challenge', Lightbulb],
            ].map(([text, Icon]) => (


              <div

                key={text as string}

                className="rounded-2xl border bg-card p-6 text-center"

              >

                <Icon className="mx-auto h-8 w-8 text-primary" />


                <p className="mt-4 font-semibold text-navy">

                  {text as string}

                </p>


              </div>


            ))}


          </div>


        </div>


      </section>





      {/* Eligibility Section */}


      <section>


        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">


          <h2 className="text-3xl font-bold text-navy">

            Eligibility

          </h2>




          <div className="mt-6 grid gap-4 md:grid-cols-2">


            {eligibility.map((item) => (


              <div

                key={item}

                className="rounded-xl border bg-card p-5"

              >

                ✓ {item}

              </div>


            ))}


          </div>


        </div>


      </section>      
      
      {/* Competition Process */}

      <section className="bg-primary/5">

        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">


          <div className="text-center">


            <h2 className="text-3xl font-bold text-navy">

              Competition Process

            </h2>


            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">

              A two-round innovation challenge designed to identify young
              innovators and encourage students to transform their ideas into
              practical applications.

            </p>


          </div>



          <div className="mt-10 grid gap-6 md:grid-cols-3">


            {rounds.map((round) => (

              <div

                key={round.title}

                className="rounded-2xl border bg-card p-6 transition hover:shadow-lg"

              >


                <round.icon className="h-9 w-9 text-primary" />


                <h3 className="mt-5 font-bold text-navy">

                  {round.title}

                </h3>


                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">

                  {round.description}

                </p>


              </div>


            ))}


          </div>





          {/* Screenshot Details */}


          <div className="mt-10 rounded-2xl border bg-card p-6">


            <div className="flex items-center gap-3">


              <ClipboardList className="h-6 w-6 text-primary" />


              <h3 className="text-xl font-bold text-navy">

                Round 1 Submission Requirements

              </h3>


            </div>



            <div className="mt-5 space-y-4 text-muted-foreground">


              <p>

                <strong className="text-navy">
                  Individual Participation:
                </strong>

                <br />

                Students have to post their app idea on Circular and their
                mentor/teacher has to post the same idea on Circular.

                <br />

                Required screenshots: <strong>2 screenshots</strong>

                <br />

                1. Student Circular post
                <br />

                2. Mentor/Teacher Circular post

              </p>




              <p>


                <strong className="text-navy">

                  Team Participation (Maximum 2 Students):

                </strong>


                <br />


                Both students and the mentor/teacher have to post the app idea
                on Circular.


                <br />


                Required screenshots: <strong>3 screenshots</strong>


                <br />


                1. Student 1 Circular post

                <br />

                2. Student 2 Circular post

                <br />

                3. Mentor/Teacher Circular post


              </p>



              <p>


                Submit screenshots along with student name, class, school name,
                team details and mentor information through the official Google
                Form.


              </p>



            </div>


          </div>


        </div>


      </section>






      {/* Circular App Download Section - Logo Place 3 */}


      <section>


        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">



          <img

            src="/circular-logo.png"

            alt="Circular App"

            className="mx-auto h-24 w-24 rounded-2xl"

          />



          <h2 className="mt-5 text-3xl font-bold text-navy">

            Download Circular App

          </h2>



          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">


            Circular App is required for Round 1 submission.
            Download the app, create your account and post your innovative idea.


          </p>




          <div className="mt-8 flex justify-center">


            <img

              src="/circular-qr.png"

              alt="Circular App Play Store QR Code"

              className="h-52 w-52 rounded-xl border p-2"

            />


          </div>




          <a

            href={playStoreLink}

            target="_blank"

          >

            <Button size="lg" className="mt-6">


              <Download className="mr-2 h-4 w-4" />


              Install Circular App


            </Button>


          </a>


        </div>


      </section>







      {/* Judging Criteria and Prize */}


      <section className="bg-muted/30">


        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">



          <div className="grid gap-10 md:grid-cols-2">



            <div>


              <h2 className="text-3xl font-bold text-navy">

                Judging Criteria

              </h2>




              <ul className="mt-5 space-y-3">


                {judging.map((item) => (


                  <li key={item}>

                    ✓ {item}

                  </li>


                ))}


              </ul>


            </div>






            {/* Big Prize Marketing Card */}


            <div className="rounded-3xl bg-primary p-10 text-center text-white">



              <Award className="mx-auto h-12 w-12" />



              <p className="mt-5 text-sm font-bold uppercase">

                Winner Benefits

              </p>



              <h2 className="mt-3 text-6xl font-black">

                ₹1,50,000

              </h2>



              <p className="mt-4 text-xl font-semibold">

                Worth App Development Training Program

              </p>



              <p className="mx-auto mt-5 max-w-sm text-sm opacity-90">


                Top 5 winning teams will receive professional app development
                training benefits.


              </p>




              <div className="mt-6 rounded-xl bg-white/10 p-4">


                <p className="font-bold">

                  Training Value Calculation

                </p>



                <p className="mt-2 text-sm">


                  5 Teams × 2 Students × ₹15,000 Course Value


                </p>



              </div>


            </div>



          </div>


        </div>


      </section>







      {/* Final CTA */}


      <section>


        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">



          <Target className="mx-auto h-10 w-10 text-primary" />



          <h2 className="mt-4 text-3xl font-bold text-navy">

            Ready to Showcase Your Innovation?

          </h2>




          <p className="mt-3 text-muted-foreground">


            Participate in Circular App Development Challenge 2026.


          </p>




          <div className="mt-8 flex justify-center gap-4">


            <Button size="lg">

              Register Now

            </Button>



            <Link href="/">


              <Button variant="outline">


                <ArrowLeft className="mr-2 h-4 w-4" />


                Back to Home


              </Button>


            </Link>



          </div>


        </div>


      </section>



    </main>

  )

}