import type * as React from 'react'
import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import Section from '../components/Section'
import type { NavigateFn } from '../App'

const projectTypes = [
  'UI/UX Design',
  'Design System',
  'App Architecture Review',
  'MVP Sprint',
  'Other',
]

const budgetRanges = [
  'Under 10,000 Pkr',
  '10,000 Pkr – 15,000 Pkr',
  '15,000 Pkr – 30,000 Pkr',
  '30,000+ Pkr',
  "Let's discuss",
]

export default function Contact({ navigate: _navigate }: { navigate: NavigateFn }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const { ref: headerRef, inView: headerVisible } = useInView(0.05)
  const { ref: formRef, inView: formVisible } = useInView()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'Website visitor'}`)
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Project Type: ${form.projectType || 'Not specified'}`,
        `Budget Range: ${form.budget || 'Not specified'}`,
        '',
        'Message:',
        form.message,
      ].join('\n')
    )

    window.location.href = `mailto:Maryam.tauheed@inara.pk?subject=${subject}&body=${body}`
    setSending(false)
    setSubmitted(true)
  }

  const update = (field: string, val: string) =>
    setForm((prev) => ({ ...prev, [field]: val }))

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    color: 'var(--color-foreground)',
    fontSize: '15px',
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s ease',
    WebkitAppearance: 'none',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--color-secondary-foreground)',
    fontFamily: "'DM Sans', sans-serif",
    marginBottom: '8px',
  }

  const focusInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,92,252,0.5)'
  }
  const blurInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const isLight = document.querySelector('[data-theme="light"]') !== null
    ;(e.currentTarget as HTMLElement).style.borderColor = isLight
      ? 'rgba(10,11,18,0.2)'
      : 'rgba(255,255,255,0.08)'
  }

  return (
    <div className="page-wrapper">
      {/* Header */}
      <section
        ref={headerRef}
        style={{
          padding: 'clamp(80px, 10vw, 120px) 0 64px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(124,92,252,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container">
          <div className={`reveal ${headerVisible ? 'visible' : ''}`}>
            <span className="section-label" style={{ display: 'inline-flex', marginBottom: '20px' }}>
              Contact
            </span>
          </div>
          <h1
            className={`reveal reveal-delay-1 ${headerVisible ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              color: 'var(--color-foreground)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginTop: '16px',
              marginBottom: '20px',
              maxWidth: '700px',
            }}
          >
            Have an idea?{' '}
            <em
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#A78BFA',
              }}
            >
              Let's build something meaningful.
            </em>
          </h1>
          <p
            className={`reveal reveal-delay-2 ${headerVisible ? 'visible' : ''}`}
            style={{
              fontSize: '17px',
              color: 'var(--color-secondary-foreground)',
              lineHeight: '1.7',
              maxWidth: '520px',
            }}
          >
            Whether you have a clear brief or just a rough idea — reach out.
            I respond to all serious inquiries within 24 hours.
          </p>

          {/* Availability badge */}
          <div
            className={`reveal reveal-delay-3 ${headerVisible ? 'visible' : ''}`}
            style={{ marginTop: '32px' }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 20px',
                background: 'rgba(0,212,160,0.08)',
                border: '1px solid rgba(0,212,160,0.25)',
                borderRadius: '100px',
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#00D4A0',
                  boxShadow: '0 0 10px #00D4A0',
                  animation: 'pulseRing 2s ease-out infinite',
                }}
              />
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#00D4A0',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Available for Freelance Projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <Section>
        <div
          className="container contact-layout"
          ref={formRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '48px',
            alignItems: 'flex-start',
          }}
        >
          {/* Contact form */}
          <div className={`reveal ${formVisible ? 'visible' : ''}`}>
            <div
              className="glass-card"
              style={{ borderRadius: '20px', padding: 'clamp(28px, 4vw, 44px)' }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'rgba(0,212,160,0.15)',
                      border: '2px solid rgba(0,212,160,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      fontSize: '28px',
                      color: '#00D4A0',
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--color-foreground)',
                      fontFamily: "'DM Sans', sans-serif",
                      marginBottom: '10px',
                    }}
                  >
                    Email draft opened!
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--color-secondary-foreground)',
                      lineHeight: '1.7',
                    }}
                  >
                    Your email app should open with the message prefilled for
                    Maryam.tauheed@inara.pk. Please hit send in your mail client to
                    deliver it.
                  </p>
                  <button
                    className="btn-primary"
                    style={{ marginTop: '28px' }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--color-foreground)',
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '-0.02em',
                      marginBottom: '28px',
                    }}
                  >
                    Tell me about your project
                  </h2>

                  {/* Name + Email */}
                  <div
                    className="form-row-2"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input
                        type="text"
                        className="contact-field"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        onFocus={focusInput}
                        onBlur={blurInput}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        type="email"
                        className="contact-field"
                        required
                        placeholder="your@example.com"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        onFocus={focusInput}
                        onBlur={blurInput}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Project type */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>Project Type</label>
                    <select
                      className="contact-field"
                      value={form.projectType}
                      onChange={(e) => update('projectType', e.target.value)}
                      onFocus={focusInput}
                      onBlur={blurInput}
                      style={{
                        ...inputStyle,
                        cursor: 'pointer',
                        color: form.projectType ? 'var(--color-foreground)' : 'var(--color-muted-foreground)',
                      }}
                    >
                      <option value="" disabled style={{ background: '#0C0F1A' }}>
                        Select project type
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} style={{ background: '#0C0F1A' }}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>Budget Range</label>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => update('budget', b)}
                          style={{
                            padding: '8px 14px',
                            borderRadius: '8px',
                            background:
                              form.budget === b
                                ? 'rgba(124,92,252,0.15)'
                                : 'rgba(255,255,255,0.04)',
                            border:
                              form.budget === b
                                ? '1px solid rgba(124,92,252,0.4)'
                                : '1px solid rgba(255,255,255,0.08)',
                            color: form.budget === b ? '#A78BFA' : 'var(--color-secondary-foreground)',
                            fontSize: '13px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Your Message *</label>
                    <textarea
                      className="contact-field"
                      required
                      rows={5}
                      placeholder="Describe your project, timeline, and any specific requirements..."
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      onFocus={focusInput}
                      onBlur={blurInput}
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: '120px',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <span className="animate-spin-slow" style={{ display: 'inline-block', fontSize: '14px' }}>◎</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 8l10.5-5.5L9 8l3.5 5.5L2 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact info sidebar */}
          <div
            className={`reveal reveal-delay-2 ${formVisible ? 'visible' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Direct contact */}
            <div
              className="glass-card"
              style={{ borderRadius: '16px', padding: '24px' }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--color-foreground)',
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: '16px',
                  letterSpacing: '-0.01em',
                }}
              >
                Direct Contact
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '9px',
                      background: 'rgba(124,92,252,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      color: '#7C5CFC',
                      flexShrink: 0,
                    }}
                  >
                    @
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: 'var(--color-muted-foreground)',
                        fontFamily: "'JetBrains Mono', monospace",
                        marginBottom: '2px',
                      }}
                    >
                      Email
                    </div>
                    <a
                      href="mailto:Maryam.tauheed@inara.pk"
                      style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--color-foreground)',
                        fontFamily: "'DM Sans', sans-serif",
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = '#A78BFA')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-foreground)')
                      }
                    >
                      Maryam.tauheed@inara.pk
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '9px',
                      background: 'rgba(0,212,160,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      color: '#00D4A0',
                      flexShrink: 0,
                    }}
                  >
                    ◎
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: 'var(--color-muted-foreground)',
                        fontFamily: "'JetBrains Mono', monospace",
                        marginBottom: '2px',
                      }}
                    >
                      Response time
                    </div>
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--color-foreground)',
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      Within 24 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="glass-card" style={{ borderRadius: '16px', padding: '24px' }}>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--color-foreground)',
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}
              >
                Working Hours
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { day: 'Mon – Fri', hours: '8:00 PM – 01:00 AM GMT+8' },
                  { day: 'Weekends', hours: 'Limited availability' },
                  // { day: 'Timezone', hours: 'Asia/Pacific (GMT+8)' },
                ].map((w) => (
                  <div
                    key={w.day}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'var(--color-muted-foreground)',
                        fontFamily: "'JetBrains Mono', monospace",
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {w.day}
                    </span>
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'var(--color-secondary-foreground)',
                        fontFamily: "'DM Sans', sans-serif",
                        textAlign: 'right',
                      }}
                    >
                      {w.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
