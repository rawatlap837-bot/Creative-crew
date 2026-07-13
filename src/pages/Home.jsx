import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Rocket, Share2, Globe, Code2, GraduationCap, ShoppingBag, Palette, Clapperboard,
  ArrowUpRight, Check, ChevronDown, TrendingUp, Users, Award, Headphones,
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import TestimonialsSection from '../components/TestimonialsSection'
import BlurText from '../animations/BlurText'
import {
  capabilities, stats, processSteps, trustedBrands, faqs, portfolioItems,
} from '../data/siteData'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import yourPhoto from '../assets/Photo.jpeg'
import ProfileCard from '../animations/ProfileCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollPin } from '../data/useScrollPin'

gsap.registerPlugin(ScrollTrigger)

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}


const iconMap = { Rocket, Share2, Globe, Code2, GraduationCap, ShoppingBag, Palette, Clapperboard }
const statIconMap = [Users, Award, TrendingUp, Headphones]

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <TrustedBy />
      <Capabilities />
      <Difference />
      <Process />
      <FeaturedWork />
      <TestimonialsSection />
      <Faq />
      <CtaBanner />
    </PageTransition>
  )
}

function Hero() {
  const [accentVisible, setAccentVisible] = useState(false)
  const [tailVisible, setTailVisible] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setAccentVisible(true), 700)
    const t2 = setTimeout(() => setTailVisible(true), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <section className="relative pt-24 sm:pt-40 pb-12 px-6 overflow-hidden bg-[#0a0a12]">
      {/* Ambient background: radial glow + faint dot grid, masked to fade at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.28),transparent_55%)]" />
      <div
        className="absolute inset-0 bg-dot-grid bg-[length:28px_28px] opacity-[0.15]"
        style={{ maskImage: 'radial-gradient(ellipse at top, black, transparent 70%)' }}
      />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-fuchsia-600/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-[12px] text-white/60 border border-white/10 bg-white/[0.03] rounded-full px-3.5 py-1.5 mb-5 mt-5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            Welcome to Creative Crew .
          </p>

          <h1 className="text-5xl sm:text-[64px] font-bold text-white tracking-[-0.03em] leading-[1.03] flex flex-wrap gap-x-3">
            <BlurText
              text="We Build Digital"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-white"
            />
            <span
              className={`bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent transition-opacity duration-500 ${accentVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
              Experiences
            </span>
            <span
              className={`text-white transition-opacity duration-500 ${tailVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
              That Grow Businesses.
            </span>
          </h1>

          <p className="mt-6 text-white/55 text-[15.5px] max-w-lg leading-relaxed">
            A premium studio for funnels, marketing, web, software. We turn ambition
            into revenue with obsessive craft.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[14px] font-semibold px-6 py-3.5 shadow-glow hover:shadow-[0_0_70px_-10px_rgba(124,58,237,0.7)] transition-shadow"
            >
              Book free consultation
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-1.5 text-violet-300 text-[14px] font-medium px-4 py-2 rounded-full border border-violet-400/30 hover:text-violet-200 hover:border-violet-400/60 transition-colors"
            >
              Explore portfolio
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Social proof: avatar stack + rating, more premium than bare stat row */}
          <div className="mt-11 flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {['from-violet-500 to-fuchsia-500', 'from-fuchsia-500 to-orange-400', 'from-cyan-400 to-violet-500', 'from-emerald-400 to-cyan-500'].map((g, i) => (
                <span
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-[#0a0a12] flex items-center justify-center text-[10px] font-bold text-white`}
                >
                  {['SC', 'MW', 'PN', 'DS'][i]}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 20 20" className="fill-violet-400">
                    <path d="M10 1l2.7 6.3 6.8.6-5.2 4.5 1.6 6.6L10 15.7 4.1 19l1.6-6.6L.5 7.9l6.8-.6L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="text-[12px] text-white/45 mt-0.5">Trusted by 250+ founders</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="max-w-sm mx-auto w-full">
            <ProfileCard
              name="Sohil Alvi"
              title="Founder & Diredtor"
              contactText="Book a call"
              avatarUrl={yourPhoto}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled
              behindGlowColor="rgba(167, 139, 250, 0.55)"
              innerGradient="linear-gradient(145deg,#7c3aed55 0%,#e879f944 100%)"
              onContactClick={() => (window.location.href = '/contact')}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Animated "growth dashboard" mockup — a smooth SVG line chart with a
// drawing-in animation, replacing a plain bar chart for a more premium feel.

function TrustedBy() {
  // Duplicate the list so the marquee can loop seamlessly at -50%.
  const loop = [...trustedBrands, ...trustedBrands]
  return (
    <section className="bg-[#0a0a12] pb-10 sm:pb-24 px-6 overflow-hidden">
      <Reveal>
        <p className="text-center text-[15px] tracking-[0.2em] uppercase text-white/30 mb-8">
          Trusted by ambitious brands
        </p>
      </Reveal>
      <div
        className="relative max-w-5xl mx-auto overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="flex w-max gap-16 items-center animate-marquee">
          {loop.map((b, i) => (
            <span
              key={`${b.name}-${i}`}
              className="flex items-center justify-center whitespace-nowrap transition-opacity"
            >
              <img
                src={b.logo}
                alt={b.name}
                loading="lazy"
                draggable={false}
                className="h-20 sm:h-15 w-auto opacity-100 transition-opacity object-contain"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
function CapabilityCard({ c, i, Icon }) {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      className={`group relative h-full rounded-2xl border bg-white p-6 pt-10 overflow-visible transition-all duration-300
        hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.25)] hover:-translate-y-1 hover:border-violet-200
        ${active ? "shadow-[0_20px_40px_-15px_rgba(124,58,237,0.25)] -translate-y-1 border-violet-200" : "border-[#0a0a12]/10"}
      `}
      onViewportEnter={() => setActive(true)}
      onViewportLeave={() => setActive(false)}
      viewport={{ amount: 0.6 }}
    >
      {/* CAPABILITIES badge */}
      <span
        className={`absolute -top-3 left-6 z-20 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-white shadow-sm transition-colors duration-300
          ${active ? "bg-violet-600" : "bg-[#0a0a12]"} group-hover:bg-violet-600
        `}
      >
        Done for you
      </span>

      {/* tint overlay — mirrors hover overlay, driven by scroll on mobile */}
      <div
        className={`absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-violet-50/80 to-fuchsia-50/60 transition-opacity duration-300
          ${active ? "opacity-100" : "opacity-0"} group-hover:opacity-100
        `}
      />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          ...
        </div>
        <h3 className="text-[15px] font-semibold text-[#0a0a12] mb-1.5">{c.title}</h3>
        <p className="text-[13px] text-[#0a0a12]/55 leading-relaxed mb-4">{c.desc}</p>
        <Link
          to="/services"
          className="text-[13px] font-medium text-violet-600 inline-flex items-center gap-1 hover:gap-1.5 transition-all mt-auto"
        >
          Read more <ArrowUpRight size={13} />
        </Link>
      </div>
    </motion.div>
  )
}

function Capabilities() {
  return (
    <section className="relative bg-[#fafafa] pt-10 sm:pt-24 pb-6 sm:pb-10 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-200/25 blur-[110px] rounded-full" />

      <svg
        className="absolute top-8 right-0 w-[440px] h-[300px] opacity-60 pointer-events-none hidden lg:block"
        viewBox="0 0 420 280"
        fill="none"
      >
        <g stroke="url(#netGrad)" strokeWidth="1">
          <line x1="40" y1="60" x2="150" y2="20" />
          <line x1="150" y1="20" x2="260" y2="70" />
          <line x1="260" y1="70" x2="380" y2="40" />
          <line x1="150" y1="20" x2="180" y2="120" />
          <line x1="180" y1="120" x2="90" y2="150" />
          <line x1="180" y1="120" x2="300" y2="150" />
          <line x1="260" y1="70" x2="300" y2="150" />
          <line x1="300" y1="150" x2="380" y2="180" />
          <line x1="90" y1="150" x2="60" y2="220" />
        </g>
        <g fill="#a78bfa">
          <circle cx="40" cy="60" r="2.5" />
          <circle cx="150" cy="20" r="3.5" />
          <circle cx="260" cy="70" r="2.5" />
          <circle cx="380" cy="40" r="2.5" />
          <circle cx="180" cy="120" r="3.5" />
          <circle cx="90" cy="150" r="2.5" />
          <circle cx="300" cy="150" r="3.5" />
          <circle cx="380" cy="180" r="2.5" />
          <circle cx="60" cy="220" r="2.5" />
        </g>
        <defs>
          <linearGradient id="netGrad" x1="0" y1="0" x2="420" y2="280">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#e879f9" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-10">
          <Reveal>
            <SectionHeading eyebrow="Capabilities" title="Everything you need," accent="under one roof" align="left" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#0a0a12]/60 text-[15px] leading-relaxed mt-5 max-w-2xl">
              From first pixel to last conversion — a senior team, obsessive craft, and outcomes
              that outperform your last agency.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, i) => {
            const Icon = iconMap[c.icon]
            return (
              <Reveal key={c.title} delay={i * 0.05}>
                <CapabilityCard c={c} i={i} Icon={Icon} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
function Difference() {
  return (
    <section className="relative bg-[#0d0b16] pt-10 sm:pt-24 py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <SectionHeading eyebrow="Why Creative Crew" title="The difference is in the" accent="details" align="left" dark />
          <p className="text-white/55 text-[15px] leading-relaxed mt-5 mb-8 max-w-md">
            We're not a service factory. We're a small studio of senior designers, engineers, and
            marketers who care too much.
          </p>
          <ul className="space-y-3.5">
            {['Senior team — no juniors on your project', 'Fixed timelines, no surprises', 'Weekly Loom updates + Slack channel', 'Design that ships, engineering that scales', 'Custom software Tracking'].map((f) => (
              <li key={f} className="flex items-start gap-3 text-[14px] text-white/70">
                <span className="w-5 h-5 rounded-full bg-violet-500/15 flex items-center justify-center mt-0.5 shrink-0">
                  <Check size={11} className="text-violet-400" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => {
              const Icon = statIconMap[i % statIconMap.length]
              return (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] hover:border-white/20 transition-colors duration-300"
                >
                  <Icon size={16} className="text-violet-400 mb-3" />
                  <p className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {s.value}
                  </p>
                  <p className="text-xs text-white/50 mt-1 uppercase tracking-wide">{s.label}</p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

'use client'
function Process() {
  const sectionRef = useRef(null) // trigger — defines when pinning starts/ends
  const pinRef = useRef(null) // element that actually gets pinned
  const [lottieFailed, setLottieFailed] = useState(false)
  const stepCount = processSteps.length

  const { progress, activeStep } = useScrollPin({
    triggerRef: sectionRef,
    pinRef,
    stepCount,
  })

  useEffect(() => {
    setLottieFailed(false)
  }, [activeStep])

  const active = processSteps[activeStep]
  const fillPercent = progress * 100

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* No manual height={stepCount * 100vh} wrapper needed — useScrollPin's
          pinSpacing creates the equivalent scroll space automatically. */}
      <div ref={pinRef} className="relative min-h-screen flex items-center py-1  sm:py-24 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] bg-violet-200/25 blur-[90px] sm:blur-[110px] rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4">
          <Reveal>
            <SectionHeading eyebrow="Our process" title="A five-step system," accent=" Built to win" align="left" />
          </Reveal>

          {/* Horizontal timeline: track fills continuously with scroll progress,
              nodes activate as the timeline reaches them */}
          <div className="relative mt-10 sm:mt-14 mb-10 sm:mb-14">
            {/* Dots row — fixed height so the line can center against it precisely */}
            <div className="relative h-4">
              <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-[2px] bg-[#0a0a12]/10 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                  style={{ width: `${fillPercent}%` }}
                />
              </div>
              <div className="relative flex justify-between h-full">
                {processSteps.map((s, i) => {
                  const isActive = i === activeStep
                  const isDone = i < activeStep
                  return (
                    <span
                      key={s.n}
                      className={`block w-4 h-4 rounded-full border-2 transition-all duration-300 ${isActive
                        ? 'bg-indigo-600 border-indigo-600 scale-125'
                        : isDone
                          ? 'bg-indigo-600 border-indigo-600'
                          : 'bg-white border-[#0a0a12]/15'
                        }`}
                    />
                  )
                })}
              </div>
            </div>

            {/* Labels row — separate, so its text height/wrap can never affect line position */}
            <div className="flex justify-between mt-2">
              {processSteps.map((s, i) => {
                const isActive = i === activeStep
                const isDone = i < activeStep
                return (
                  <span
                    key={s.n}
                    className={`text-xs font-medium text-center transition-colors duration-300 ${isActive || isDone ? 'text-[#0a0a12]' : 'text-[#0a0a12]/35'
                      }`}
                  >
                    {s.title}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Lottie left, text right */}
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
            <div className="relative rounded-3xl bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-[#0a0a12]/5 p-6 sm:p-8 overflow-hidden w-full max-w-[420px] mx-auto lg:mx-0 aspect-square">
              <div className="w-full h-full relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -24, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                  >
                    {!lottieFailed && active.lottie ? (
                      <LottieWithFallback
                        key={active.lottie}
                        src={active.lottie}
                        onError={() => setLottieFailed(true)}
                      />
                    ) : (
                      <FallbackVisual label={active.title} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${activeStep}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 right-4 rounded-xl border border-[#0a0a12]/10 bg-white px-3.5 py-2.5 shadow-card"
                >
                  <p className="text-[10px] text-[#0a0a12]/40">Step {active.n}</p>
                  <p className={`text-sm font-bold bg-gradient-to-r ${active.accent} bg-clip-text text-transparent`}>
                    {active.title}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 32, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -32, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <p className="text-xs font-semibold mb-2 text-violet-500">{active.n}</p>
                  <h3 className="font-bold text-3xl sm:text-4xl text-[#0a0a12] leading-tight mb-4">
                    {active.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[#0a0a12]/55 max-w-lg">{active.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Wraps DotLottieReact with a load timeout — if the animation hasn't
// rendered within 8s (dead URL, network block, etc.), triggers onError
// so the parent can swap in a fallback instead of showing a blank box.
function LottieWithFallback({ src, onError }) {
  const loadedRef = useRef(false)

  useEffect(() => {
    loadedRef.current = false
    const timeout = setTimeout(() => {
      if (!loadedRef.current) onError?.()
    }, 8000)
    return () => clearTimeout(timeout)
  }, [src])

  return (
    <DotLottieReact
      src={src}
      loop
      autoplay
      style={{ width: '100%', height: '100%' }}
      onLoad={() => { loadedRef.current = true }}
      onError={() => onError?.()}
    />
  )
}

// Simple gradient + label fallback shown if the Lottie file fails or
// times out, so the panel is never an empty rectangle.
function FallbackVisual({ label }) {
  return (
    <div
      className="rounded-2xl flex items-center justify-center shadow-lg"
      style={{
        width: '140px',
        height: '140px',
        background: 'linear-gradient(to bottom right, #7c3aed, #d946ef)',
      }}
    >
      <span className="text-white text-4xl font-bold opacity-80">{label?.[0]}</span>
    </div>
  )
}
function FeaturedWork() {
  const featured = portfolioItems.slice(0, 4)
  return (
    <section className="relative z-20 bg-[#0a0a12] pt-10 sm:pt-24 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <Reveal>
            <SectionHeading eyebrow="Selected work" title="Work we're" accent="proud of" align="left" dark />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-1.5 text-white/70 text-[13px] font-medium hover:text-white transition-colors"
            >
              View all
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <Link to="/portfolio" className="group block relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="inline-block text-[10.5px] uppercase tracking-wide text-violet-200 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1 mb-2">
                    {p.category}
                  </p>
                  <p className="text-white font-semibold">{p.title}</p>
                </div>
                <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white transition-all">
                  <ArrowUpRight size={14} className="text-white group-hover:text-[#0a0a12] transition-colors" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="bg-[#0a0a12] pt-10 sm:pt-24 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions," accent="answered" dark />
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={`rounded-xl border overflow-hidden transition-colors duration-300 ${isOpen ? 'border-violet-400/40 bg-white/[0.05]' : 'border-white/10 bg-white/[0.03]'}`}>
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14px] font-medium text-white">{f.q}</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ml-4 transition-colors duration-300 ${isOpen ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500' : 'bg-white/10'}`}>
                      <ChevronDown
                        size={13}
                        className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-[13.5px] text-white/55 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}