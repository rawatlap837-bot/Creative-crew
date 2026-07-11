import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { Mail, Phone, MapPin, Clock, Instagram, Twitter, Linkedin, Youtube, Check, ChevronDown } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { siteConfig, budgetOptions, services } from '../data/siteData'

// Replace with your deployed Google Apps Script Web App URL (see setup notes below)
const GOOGLE_SHEET_ENDPOINT = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'

const serviceOptions = services.map((s) => s.title)

export default function Contact() {
  return (
    <PageTransition>
      <section className="relative pt-40 pb-20 px-6 bg-[#0a0a12] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.3),transparent_55%)]" />
        <Reveal className="relative max-w-2xl mx-auto text-center">
          <SectionHeading eyebrow="Contact" title="Let's" accent="talk" dark />
          <p className="mt-5 text-white/60 text-[15px] leading-relaxed">
            Tell us about your project. We'll reply within 24 hours with a plan and a call time.
          </p>
        </Reveal>
      </section>

      <section className="bg-[#0a0a12] pb-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-6">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactInfo />
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceOptions[0] || '',
    budget: budgetOptions[2],
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  const updateBudget = (value) => setForm((f) => ({ ...f, budget: value }))
  const updateService = (value) => setForm((f) => ({ ...f, service: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.'
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.'
    else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.'
    if (!form.service) next.service = 'Please select a service.'
    if (!form.message.trim()) next.message = 'Tell us a bit about your project.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setSubmitting(true)
    setSubmitError('')
    try {
      await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors', // Apps Script web apps don't return CORS headers by default
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          budget: form.budget,
          message: form.message,
          submittedAt: new Date().toISOString(),
        }),
      })
      setSubmitted(true)
    } catch (err) {
      setSubmitError('Something went wrong sending your message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 flex flex-col items-center text-center justify-center h-full min-h-[400px]">
        <span className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-5">
          <Check size={22} className="text-white" />
        </span>
        <h3 className="text-xl font-bold text-white mb-2">Message sent</h3>
        <p className="text-white/55 text-sm max-w-xs">
          Thanks {form.name.split(' ')[0]} — we'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Project inquiry</h2>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <Field label="Your name" error={errors.name}>
          <input
            type="text"
            placeholder="Arman rawat"
            value={form.name}
            onChange={update('name')}
            className={inputClass(errors.name)}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={update('email')}
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <Field label="Phone number" error={errors.phone}>
          <input
            type="tel"
            placeholder="+91 123 456 7890"
            value={form.phone}
            onChange={update('phone')}
            className={inputClass(errors.phone)}
          />
        </Field>

        <Field label="Service" error={errors.service}>
          <Listbox value={form.service} onChange={updateService}>
            <div className="relative">
              <Listbox.Button className={`${inputClass(errors.service)} flex items-center justify-between text-left`}>
                <span className={form.service ? '' : 'text-white/30'}>
                  {form.service || 'Select a service'}
                </span>
                <ChevronDown size={15} className="text-white/40 shrink-0" />
              </Listbox.Button>

              <Listbox.Options className="absolute z-30 mt-2 w-full rounded-xl border border-white/10 bg-[#141221] shadow-xl overflow-hidden focus:outline-none max-h-60 overflow-y-auto">
                {serviceOptions.map((s) => (
                  <Listbox.Option
                    key={s}
                    value={s}
                    className={({ active }) =>
                      `flex items-center justify-between px-4 py-2.5 text-[14px] cursor-pointer transition-colors ${active ? 'bg-violet-500/15 text-white' : 'text-white/70'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span>{s}</span>
                        {selected && <Check size={14} className="text-violet-400" />}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </Field>
      </div>

      <Field label="Budget" className="mb-5">
        <Listbox value={form.budget} onChange={updateBudget}>
          <div className="relative">
            <Listbox.Button className={`${inputClass()} flex items-center justify-between text-left`}>
              <span>{form.budget}</span>
              <ChevronDown size={15} className="text-white/40 shrink-0" />
            </Listbox.Button>

            <Listbox.Options className="absolute z-30 mt-2 w-full rounded-xl border border-white/10 bg-[#141221] shadow-xl overflow-hidden focus:outline-none">
              {budgetOptions.map((b) => (
                <Listbox.Option
                  key={b}
                  value={b}
                  className={({ active }) =>
                    `flex items-center justify-between px-4 py-2.5 text-[14px] cursor-pointer transition-colors ${active ? 'bg-violet-500/15 text-white' : 'text-white/70'
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span>{b}</span>
                      {selected && <Check size={14} className="text-violet-400" />}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </Field>

      <Field label="Tell us about your project" error={errors.message} className="mb-7">
        <textarea
          rows={5}
          placeholder="Goals, timeline, links..."
          value={form.message}
          onChange={update('message')}
          className={inputClass(errors.message) + ' resize-y'}
        />
      </Field>

      {submitError && <p className="text-[12px] text-rose-400 mb-4">{submitError}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[14px] font-semibold py-3.5 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Send message ↗'}
      </button>
    </form>
  )
}

function Field({ label, error, children, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-[13px] text-white/60 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-[12px] text-rose-400 mt-1.5">{error}</p>}
    </div>
  )
}

function inputClass(error) {
  return `w-full rounded-xl bg-white/5 border px-4 py-3 text-[14px] text-white placeholder:text-white/30 focus:outline-none transition-colors ${error ? 'border-rose-400/60' : 'border-white/10 focus:border-violet-400/60'
    }`
}

function ContactInfo() {
  const info = [
    { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}` },
    { icon: MapPin, label: 'Studio', value: siteConfig.location },
    { icon: Clock, label: 'Business hours', value: siteConfig.hours },
  ]
  return (
    <div className="flex flex-col gap-4">
      {info.map((it) => {
        const Icon = it.icon
        const content = (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex items-start gap-4">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0">
              <Icon size={15} className="text-white" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-white/40 mb-0.5">{it.label}</p>
              <p className="text-[14px] font-semibold text-white">{it.value}</p>
            </div>
          </div>
        )
        return it.href ? (
          <a key={it.label} href={it.href}>
            {content}
          </a>
        ) : (
          <div key={it.label}>{content}</div>
        )
      })}

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-[11px] uppercase tracking-wide text-white/40 mb-3">Follow</p>
        <div className="flex items-center gap-2.5">
          {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (

            <a key={i}
              href="#"
              aria-label="Social link"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}