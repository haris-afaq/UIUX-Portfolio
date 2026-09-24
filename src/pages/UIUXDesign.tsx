import type * as React from 'react'
import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import Section from '../components/Section'
import type { NavigateFn } from '../App'

const processSteps = [
  {
    num: '01',
    title: 'User Research',
    desc: 'Interviews, surveys, competitive analysis, and empathy mapping to deeply understand the problem space before touching any design tool.',
    color: '#FFB347',
    icon: '◎',
  },
  {
    num: '02',
    title: 'Information Architecture',
    desc: "Card sorting, sitemap design, and user flow mapping to organize information in ways that match users' mental models.",
    color: '#7C5CFC',
    icon: '◈',
  },
  {
    num: '03',
    title: 'Wireframing',
    desc: 'Low and mid-fidelity wireframes that explore interaction models quickly without getting distracted by visual polish too early.',
    color: '#00D4A0',
    icon: '◆',
  },
  {
    num: '04',
    title: 'Visual Design',
    desc: 'High-fidelity screens with a consistent design system — typography, spacing, color, and component libraries that scale.',
    color: '#FC5C7D',
    icon: '◉',
  },
  {
    num: '05',
    title: 'Prototype & Test',
    desc: 'Interactive prototypes in Figma, usability testing with real users, and design iteration based on observed behavior, not opinion.',
    color: '#5CF6B0',
    icon: '◐',
  },
]

const designSystemColors = [
  { name: 'Primary', value: '#6C47FF', hex: '#6C47FF' },
  { name: 'Secondary', value: '#1A1A2E', hex: '#1A1A2E' },
  { name: 'Accent', value: '#00D4A0', hex: '#00D4A0' },
  { name: 'Surface', value: '#0C0F1A', hex: '#0C0F1A' },
  { name: 'Text', value: 'var(--color-foreground)', hex: 'var(--color-foreground)' },
  { name: 'Muted', value: 'var(--color-muted-foreground)', hex: 'var(--color-muted-foreground)' },
]

const typographyScale = [
  { name: 'Display', size: '56px', weight: '700', sample: 'Design that works', font: 'DM Sans' },
  { name: 'Heading 1', size: '40px', weight: '700', sample: 'Clear hierarchy', font: 'DM Sans' },
  { name: 'Heading 2', size: '28px', weight: '600', sample: 'Structure and form', font: 'DM Sans' },
  { name: 'Body', size: '16px', weight: '400', sample: 'Readable body copy that carries meaning without fatigue.', font: 'DM Sans' },
  { name: 'Caption', size: '12px', weight: '500', sample: 'LABELS AND METADATA', font: 'JetBrains Mono' },
]

const expertiseCards = [
  {
    title: 'Design Systems',
    desc: 'Component libraries, token architecture, and documentation that lets teams move fast without breaking things.',
    color: '#7C5CFC',
    icon: '◈',
  },
  {
    title: 'User Research',
    desc: 'Structured interviews, usability sessions, and qualitative synthesis that replaces assumptions with evidence.',
    color: '#00D4A0',
    icon: '◎',
  },
  {
    title: 'Interaction Design',
    desc: 'Micro-interactions, animation principles, and state transitions that make interfaces feel alive and intentional.',
    color: '#FC5C7D',
    icon: '◆',
  },
  {
    title: 'Prototyping',
    desc: 'High-fidelity Figma prototypes that stakeholders can click through and users can test — no imagination required.',
    color: '#FFB347',
    icon: '◉',
  },
  {
    title: 'Mobile UI',
    desc: 'Platform-native patterns for iOS and Android, with design that respects each system\'s conventions while staying on-brand.',
    color: '#5CF6B0',
    icon: '◐',
  },
  {
    title: 'Visual Design',
    desc: 'Typography, color, layout, and imagery choices that communicate brand personality and build trust at a glance.',
    color: '#A78BFA',
    icon: '◑',
  },
]

export default function UIUXDesign({ navigate }: { navigate: NavigateFn }) {
  const [activeColor, setActiveColor] = useState<string | null>(null)
  const [activeTypeSample, setActiveTypeSample] = useState(0)

  const { ref: headerRef, inView: headerVisible } = useInView(0.05)
  const { ref: processRef, inView: processVisible } = useInView()
  const { ref: expertiseRef, inView: expertiseVisible } = useInView()
  const { ref: dsRef, inView: dsVisible } = useInView()

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
            left: '-80px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(0,212,160,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container">
          <div className={`reveal ${headerVisible ? 'visible' : ''}`}>
            <span className="section-label" style={{ display: 'inline-flex', marginBottom: '20px' }}>
              UI/UX Design
            </span>
          </div>
          <h1
            className={`reveal reveal-delay-1 ${headerVisible ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              color: 'var(--color-foreground)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginTop: '16px',
              marginBottom: '24px',
              maxWidth: '800px',
            }}
          >
            Design that{' '}
            <em
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#00D4A0',
              }}
            >
              solves problems
            </em>{' '}
            beautifully.
          </h1>
          <p
            className={`reveal reveal-delay-2 ${headerVisible ? 'visible' : ''}`}
            style={{
              fontSize: '18px',
              color: 'var(--color-secondary-foreground)',
              lineHeight: '1.7',
              maxWidth: '600px',
            }}
          >
            I approach UI/UX as the art of reducing friction between what users want
            to accomplish and what the interface lets them do — combining research,
            systems thinking, and visual craft.
          </p>
        </div>
      </section>

      {/* Expertise grid */}
      <Section spacing="tight">
        <div className="container">
          <div ref={expertiseRef}>
            <div
              className={`reveal ${expertiseVisible ? 'visible' : ''}`}
              style={{ marginBottom: '48px' }}
            >
              <h2
                style={{
                  fontSize: 'clamp(26px, 3vw, 40px)',
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'var(--color-foreground)',
                  letterSpacing: '-0.03em',
                }}
              >
                Design{' '}
                <em
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  capabilities
                </em>
              </h2>
            </div>
            <div
              className="grid-3col"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}
            >
              {expertiseCards.map((card, i) => (
                <div
                  key={i}
                  className={`glass-card glass-card-hover reveal reveal-delay-${i + 1} ${expertiseVisible ? 'visible' : ''}`}
                  style={{ borderRadius: '16px', padding: '24px' }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '11px',
                      background: `${card.color}15`,
                      border: `1px solid ${card.color}28`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      color: card.color,
                      marginBottom: '14px',
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'var(--color-foreground)',
                      fontFamily: "'DM Sans', sans-serif",
                      marginBottom: '8px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-muted-foreground)', lineHeight: '1.7' }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Design Process */}
      <Section
        style={{
          background: 'rgba(255,255,255,0.015)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container">
          <div ref={processRef}>
            <div
              className={`reveal ${processVisible ? 'visible' : ''}`}
              style={{ marginBottom: '56px', textAlign: 'center' }}
            >
              <span className="section-label" style={{ display: 'inline-flex', marginBottom: '16px' }}>
                Process
              </span>
              <h2
                style={{
                  fontSize: 'clamp(26px, 3vw, 40px)',
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'var(--color-foreground)',
                  letterSpacing: '-0.03em',
                  marginTop: '16px',
                }}
              >
                How I{' '}
                <em
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  approach design
                </em>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className={`process-step-row glass-card glass-card-hover reveal reveal-delay-${i + 1} ${processVisible ? 'visible' : ''}`}
                  style={{
                    borderRadius: '14px',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '28px',
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '13px',
                      background: `${step.color}15`,
                      border: `1px solid ${step.color}28`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      color: step.color,
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '11px',
                          color: step.color,
                          letterSpacing: '0.08em',
                        }}
                      >
                        {step.num}
                      </span>
                      <h3
                        style={{
                          fontSize: '17px',
                          fontWeight: 700,
                          color: 'var(--color-foreground)',
                          fontFamily: "'DM Sans', sans-serif",
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--color-muted-foreground)', lineHeight: '1.65' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Interactive Design System Showcase */}
      <Section>
        <div className="container">
          <div ref={dsRef}>
            <div
              className={`reveal ${dsVisible ? 'visible' : ''}`}
              style={{ marginBottom: '56px' }}
            >
              <span className="section-label" style={{ display: 'inline-flex', marginBottom: '16px' }}>
                Design System Preview
              </span>
              <h2
                style={{
                  fontSize: 'clamp(26px, 3vw, 40px)',
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'var(--color-foreground)',
                  letterSpacing: '-0.03em',
                  marginTop: '16px',
                }}
              >
                Structured{' '}
                <em
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  visual language
                </em>
              </h2>
            </div>

            {/* Color palette */}
            <div
              className={`glass-card reveal reveal-delay-1 ${dsVisible ? 'visible' : ''}`}
              style={{ borderRadius: '16px', padding: '28px', marginBottom: '16px' }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--color-muted-foreground)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                Color Palette
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {designSystemColors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setActiveColor(activeColor === c.hex ? null : c.hex)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      background: activeColor === c.hex ? 'rgba(255,255,255,0.06)' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '12px',
                      borderRadius: '12px',
                      transition: 'background 0.2s ease',
                    } as React.CSSProperties}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: '12px',
                        background: c.value,
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: activeColor === c.hex ? `0 0 20px ${c.value}50` : 'none',
                        transition: 'box-shadow 0.2s ease',
                      }}
                    />
                    <div style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: 'var(--color-foreground)',
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {c.name}
                      </div>
                      <div
                        style={{
                          fontSize: '10px',
                          color: 'var(--color-muted-foreground)',
                          fontFamily: "'JetBrains Mono', monospace",
                          marginTop: '2px',
                        }}
                      >
                        {c.hex}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Typography scale */}
            <div
              className={`glass-card reveal reveal-delay-2 ${dsVisible ? 'visible' : ''}`}
              style={{ borderRadius: '16px', padding: '28px', marginBottom: '16px' }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--color-muted-foreground)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                Typography Scale
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                {typographyScale.map((type, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveTypeSample(i)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '14px 16px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      background:
                        activeTypeSample === i ? 'rgba(124,92,252,0.08)' : 'transparent',
                      border:
                        activeTypeSample === i
                          ? '1px solid rgba(124,92,252,0.2)'
                          : '1px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div
                      className="typography-row-label"
                      style={{
                        width: '120px',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          fontFamily: "'JetBrains Mono', monospace",
                          color: 'var(--color-muted-foreground)',
                        }}
                      >
                        {type.name}
                      </div>
                      <div
                        style={{
                          fontSize: '10px',
                          fontFamily: "'JetBrains Mono', monospace",
                          color: '#444659',
                          marginTop: '2px',
                        }}
                      >
                        {type.size} / {type.weight}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: type.size,
                        fontWeight: parseInt(type.weight),
                        fontFamily:
                          type.font === 'JetBrains Mono'
                            ? "'JetBrains Mono', monospace"
                            : "'DM Sans', sans-serif",
                        color: 'var(--color-foreground)',
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        flex: 1,
                      }}
                    >
                      {type.sample}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Component samples */}
            <div
              className={`glass-card reveal reveal-delay-3 ${dsVisible ? 'visible' : ''}`}
              style={{ borderRadius: '16px', padding: '28px' }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--color-muted-foreground)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                Component Samples
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <button className="btn-primary">Primary Action</button>
                <button className="btn-secondary">Secondary Action</button>
                <button
                  style={{
                    padding: '13px 28px',
                    background: 'rgba(0,212,160,0.1)',
                    border: '1px solid rgba(0,212,160,0.3)',
                    borderRadius: '10px',
                    color: '#00D4A0',
                    fontSize: '15px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Accent Button
                </button>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {['Figma', 'User Research', 'UI/UX', 'Prototyping', 'Design Systems'].map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
              {/* Input sample */}
              <div style={{ maxWidth: '360px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--color-secondary-foreground)',
                    fontFamily: "'DM Sans', sans-serif",
                    marginBottom: '8px',
                  }}
                >
                  Project Name
                </label>
                <input
                  placeholder="e.g. HealthTrack Pro"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    color: 'var(--color-foreground)',
                    fontSize: '15px',
                    fontFamily: "'DM Sans', sans-serif",
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => {
                    ;(e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(124,92,252,0.5)'
                  }}
                  onBlur={(e) => {
                    ;(e.currentTarget as HTMLInputElement).style.borderColor =
                      'rgba(255,255,255,0.1)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        spacing="tight"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              color: 'var(--color-foreground)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Need a design that converts?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-muted-foreground)', marginBottom: '28px' }}>
            From wireframes to production-ready designs — let's build something users love.
          </p>
          <div className="btn-stack-mobile" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('contact')}>
              Start a Design Project
            </button>
            <button className="btn-secondary" onClick={() => navigate('work')}>
              View Design Work
            </button>
          </div>
        </div>
      </Section>
    </div>
  )
}
