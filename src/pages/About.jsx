import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import Testimonials from '../components/TestimonialsSection'
import { timeline, teamMembers } from '../data/siteData'
import { Rocket, Globe, Award } from 'lucide-react'

export default function About() {
  return (
    <PageTransition>
      <Hero />
      <MissionVisionBelief />
      <Timeline />
      <Team />
      <Testimonials />
      <CtaBanner />
    </PageTransition>
  )
}

function Hero() {
  return (
    <section className="relative pt-24 sm:pt-40 px-6 bg-[#0a0a12] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.3),transparent_55%)]" />
      <Reveal className="relative max-w-3xl mx-auto text-center">
        <SectionHeading eyebrow="About" title="We're a studio for" accent="ambitious brands" dark />
        <p className="mt-5 text-white/60 text-[15px] max-w-xl mx-auto leading-relaxed">
          A team  that treats every project like it's our own company. We ship
          faster, care harder, and design with obsession.
        </p>
      </Reveal>
    </section>
  )
}

function MissionVisionBelief() {
  const items = [
    {
      title: 'Our Mission',
      desc: 'To make premium design and engineering accessible to founders who care about craft.',
      icon: Rocket,
    },
    {
      title: 'Our Vision',
      desc: 'A world where every ambitious brand looks and performs like a category leader.',
      icon: Globe,
    },
    {
      title: 'Our Belief',
      desc: 'Great work happens at the intersection of taste, systems, and speed.',
      icon: Award,
    },
  ]
  return (
    <section className="bg-[#0a0a12] py-20 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-5">
        {items.map((it, i) => {
          const Icon = it.icon
          return (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 h-full overflow-hidden transition-all duration-300 hover:border-violet-500/40 hover:bg-white/[0.04]">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-500/0 group-hover:bg-violet-500/20 rounded-full blur-[40px] transition-all duration-500" />

                <div className="relative">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10 mb-5">
                    <Icon size={19} className="text-violet-300" />
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{it.title}</h3>
                  <p className="text-[14px] text-white/55 leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function Timeline() {
  return (
    <section className="bg-[#0a0a12] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Timeline" title="The" accent="journey" align="left" dark />
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.07}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 h-full">
                <p className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                  {t.year}
                </p>
                <h3 className="text-[15px] font-semibold text-white mb-1.5">{t.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Team" title="Meet the" accent="people" align="left" />
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.07}>
              <div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-[#0a0a12]/5">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="font-semibold text-[#0a0a12] text-[15px]">{m.name}</p>
                <p className="text-[13px] text-[#0a0a12]/50">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}