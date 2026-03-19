'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Button from '@/components/ui/Button'
import { WA_LINK, CONTACT_INFO } from '@/lib/constants'

const serviceOptions = ['Full Wedding Planning','Decor & Florals','Catering','Photography & Video','Destination Wedding','Honeymoon Planning']

export default function ContactPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    date: '', city: '', guests: '',
    services: [] as string[], message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))
  const toggleService = (s: string) => setForm(f => ({
    ...f,
    services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s],
  }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const services = form.services.length > 0 ? form.services.join(', ') : 'Not specified'
    const message = [
      `Hi ColorKnit! I'd like to enquire about wedding planning.`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      `*Wedding Date:* ${form.date || 'Not decided yet'}`,
      `*City / Venue:* ${form.city || 'Not specified'}`,
      `*Expected Guests:* ${form.guests || 'Not specified'}`,
      `*Services Needed:* ${services}`,
      form.message ? `*Message:* ${form.message}` : '',
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/919011026236?text=${encodeURIComponent(message)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <div className="relative h-[300px] overflow-hidden">
        <Image src="/images/services/srv-planning.jpg" alt="Contact ColorKnit Events — wedding planning consultation in Pune" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero-dark)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
          <p className="font-fine text-[12px] uppercase tracking-[0.2em] text-brand-goldLight mb-3">Let&apos;s Talk</p>
          <h1 className="font-display font-bold text-white" style={{ fontSize: 'clamp(36px,5vw,56px)' }}>Get In Touch</h1>
          <nav className="mt-3 font-fine text-[13px] text-white/50">
            <a href="/" className="hover:text-white">Home</a><span className="mx-2">/</span>
            <span className="text-white/80">Contact</span>
          </nav>
        </div>
      </div>

      <section className="bg-brand-cream py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12">

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-brand-pinkSoft flex-center mx-auto mb-6">
                    <Send size={36} className="text-brand-rose" />
                  </div>
                  <h2 className="font-display text-[32px] font-bold text-brand-dark">We&apos;ve Got Your Message!</h2>
                  <p className="font-body text-[16px] text-brand-neutral mt-3 max-w-sm mx-auto">
                    Our team will reach out within 24 hours. Can&apos;t wait? WhatsApp us directly.
                  </p>
                  <div className="mt-8 flex gap-4 justify-center">
                    <Button href={WA_LINK} variant="whatsapp" external>
                      WhatsApp Us
                    </Button>
                    <Button onClick={() => { setSubmitted(false); setStep(1) }} variant="secondary">
                      Submit Another
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      {['Basic Info', 'Wedding Details', 'Services'].map((s, i) => (
                        <span key={i} className={`font-fine text-[12px] ${step > i ? 'text-brand-rose font-semibold' : 'text-brand-neutral'}`}>
                          Step {i + 1}: {s}
                        </span>
                      ))}
                    </div>
                    <div className="h-1.5 bg-brand-neutralLight rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-brand rounded-full transition-all duration-500"
                        style={{ width: `${(step / 3) * 100}%` }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <div className="flex flex-col gap-5">
                        <h2 className="font-display text-[28px] font-bold text-brand-dark">Tell us about yourself</h2>
                        {[
                          { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Priya & Rahul Sharma' },
                          { label: 'Email Address', key: 'email', type: 'email', placeholder: 'hello@youremail.com' },
                          { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                        ].map(f => (
                          <div key={f.key}>
                            <label className="font-body text-[13px] font-medium text-brand-dark block mb-1.5">{f.label}</label>
                            <input
                              type={f.type}
                              value={form[f.key as keyof typeof form] as string}
                              onChange={e => update(f.key, e.target.value)}
                              placeholder={f.placeholder}
                              required
                              className="w-full border border-brand-goldPale rounded-xl px-4 py-3 font-body text-[15px] text-brand-dark focus:outline-none focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/20 transition"
                            />
                          </div>
                        ))}
                        <Button onClick={() => setStep(2)} type="button" className="mt-2">
                          Continue →
                        </Button>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="flex flex-col gap-5">
                        <h2 className="font-display text-[28px] font-bold text-brand-dark">Your Wedding Details</h2>
                        {[
                          { label: 'Wedding Date', key: 'date', type: 'date' },
                          { label: 'City / Venue', key: 'city', type: 'text', placeholder: 'Pune, Maharashtra' },
                          { label: 'Expected Guests', key: 'guests', type: 'number', placeholder: '200' },
                        ].map(f => (
                          <div key={f.key}>
                            <label className="font-body text-[13px] font-medium text-brand-dark block mb-1.5">{f.label}</label>
                            <input
                              type={f.type}
                              value={form[f.key as keyof typeof form] as string}
                              onChange={e => update(f.key, e.target.value)}
                              placeholder={(f as {placeholder?: string}).placeholder}
                              className="w-full border border-brand-goldPale rounded-xl px-4 py-3 font-body text-[15px] text-brand-dark focus:outline-none focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/20 transition"
                            />
                          </div>
                        ))}
                        <div className="flex gap-3 mt-2">
                          <Button onClick={() => setStep(1)} variant="secondary" type="button">← Back</Button>
                          <Button onClick={() => setStep(3)} type="button" className="flex-1">Continue →</Button>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="flex flex-col gap-5">
                        <h2 className="font-display text-[28px] font-bold text-brand-dark">What do you need?</h2>
                        <div>
                          <label className="font-body text-[13px] font-medium text-brand-dark block mb-3">Services Needed (select all that apply)</label>
                          <div className="grid grid-cols-2 gap-2">
                            {serviceOptions.map(s => (
                              <button
                                key={s} type="button"
                                onClick={() => toggleService(s)}
                                className={`text-left rounded-xl px-3 py-2.5 font-body text-[13px] border transition-all duration-200 ${form.services.includes(s) ? 'border-brand-rose bg-brand-pinkSoft text-brand-rose font-medium' : 'border-brand-neutralLight text-brand-neutral hover:border-brand-rose'}`}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="font-body text-[13px] font-medium text-brand-dark block mb-1.5">Additional Message</label>
                          <textarea
                            value={form.message}
                            onChange={e => update('message', e.target.value)}
                            rows={4}
                            placeholder="Tell us anything else about your dream wedding..."
                            className="w-full border border-brand-goldPale rounded-xl px-4 py-3 font-body text-[15px] text-brand-dark focus:outline-none focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/20 transition resize-none"
                          />
                        </div>
                        <div className="flex gap-3">
                          <Button onClick={() => setStep(2)} variant="secondary" type="button">← Back</Button>
                          <Button type="submit" className="flex-1">
                            <Send size={16} /> Send Inquiry
                          </Button>
                        </div>
                        <p className="font-fine text-[12px] text-brand-neutral text-center">🔒 Your details are safe with us. No spam, ever.</p>
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>

            {/* Info sidebar */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl p-7 shadow-card" data-aos="fade-up">
                <h3 className="font-body text-[20px] font-semibold text-brand-dark mb-6">Contact Information</h3>
                {[
                  { Icon: MapPin, label: 'Address',       value: CONTACT_INFO.address },
                  { Icon: Phone,  label: 'Phone',         value: CONTACT_INFO.phone, href: CONTACT_INFO.phoneRaw },
                  { Icon: Mail,   label: 'Email',         value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                  { Icon: Clock,  label: 'Working Hours', value: CONTACT_INFO.hours },
                ].map(({ Icon, label, value, href }, i) => (
                  <div key={i} className="flex gap-4 items-start mb-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-pinkSoft flex-center flex-shrink-0">
                      <Icon size={18} className="text-brand-rose" />
                    </div>
                    <div>
                      <p className="font-fine text-[12px] text-brand-neutral uppercase tracking-wider">{label}</p>
                      {href
                        ? <a href={href} className="font-body text-[14px] text-brand-dark hover:text-brand-rose transition-colors font-medium">{value}</a>
                        : <p className="font-body text-[14px] text-brand-dark font-medium">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white rounded-2xl p-6 flex items-center gap-4 shadow-wa hover:opacity-95 transition"
                data-aos="fade-up" data-aos-delay="100"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <p className="font-body font-semibold text-[16px]">Chat on WhatsApp</p>
                  <p className="font-fine text-[13px] text-white/80 mt-0.5">Typically replies in minutes</p>
                </div>
              </a>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden shadow-card h-56" data-aos="fade-up" data-aos-delay="150">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.543877!2d73.7742!3d18.5592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b93b5c5c4a3f%3A0xa7e5f95b6e4d2c8!2sFortune%20House%2C%20Baner%20-%20Pashan%20Link%20Rd%2C%20Baner%2C%20Pune%2C%20Maharashtra%20411045!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
