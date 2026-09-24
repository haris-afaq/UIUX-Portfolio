import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/projects'
import Section from '../components/Section'
import ProjectMedia from '../components/ProjectMedia'
import type { NavigateFn } from '../App'

const techStack = [
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Wireframming', color: '#00D4A0' },
  { name: 'Prototyping', color: '#F24E1E' },
  { name: 'Adobe Illustrator', color: '#3DDC84' },
  { name: 'Adobe Photoshop', color: '#A2AAAD' },
  { name: 'Canva', color: '#FF7262' },
  { name: 'Adobe XD', color: '#54C5F8' },
]

const processSteps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Deep-dive into your users, goals, and constraints through research, and competitive analysis.',
    color: '#FFB347',
    icon: '◎',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Wireframes to high-fidelity screens, every pixel serves a purpose. Iterated against real user feedback.',
    color: '#00D4A0',
    icon: '◈',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Test ideas, gather feedback, and refine the experience around real user needs.',
    color: '#7C5CFC',
    icon: '◆',
  },
  {
    num: '04',
    title: 'Ship',
    desc: 'Production-ready apps deployed to App Store and Play Store.',
    color: '#FC5C7D',
    icon: '◉',
  },
]

function HeroVisual() {
  const phases = [
    { label: 'Idea', icon: '◎', color: '#FFB347', delay: '0s' },
    { label: 'Design', icon: '◈', color: '#00D4A0', delay: '0.15s' },
    { label: 'Code', icon: '◆', color: '#7C5CFC', delay: '0.3s' },
    { label: 'Product', icon: '◉', color: '#FC5C7D', delay: '0.45s' },
  ]

  const floatChips = [
    { label: 'User Research', color: '#7C5CFC', style: { top: '8%', left: '-12%' }, delay: '0s' },
    { label: 'UI/UX Design', color: '#00D4A0', style: { top: '18%', right: '-14%' }, delay: '1.2s' },
    { label: 'Wireframes', color: '#FC5C7D', style: { bottom: '22%', left: '-10%' }, delay: '2.1s' },
    { label: 'Prototyping', color: '#FFB347', style: { bottom: '10%', right: '-8%' }, delay: '0.7s' },
  ]

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 400,
        margin: '0 auto',
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      {/* Center card */}
      <div
        className="glass-card animate-float"
        style={{ borderRadius: '20px', padding: '28px', position: 'relative', zIndex: 2 }}
      >
        {/* Pipeline label */}
        <div
          style={{
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#00D4A0',
              boxShadow: '0 0 8px #00D4A0',
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              color: 'var(--color-muted-foreground)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Design → Build → Ship
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
          }}
        >
          {phases.map((phase, i) => (
            <div
              key={i}
              style={{
                background: `${phase.color}10`,
                border: `1px solid ${phase.color}28`,
                borderRadius: '12px',
                padding: '18px 14px',
                textAlign: 'center',
                animationDelay: phase.delay,
              }}
            >
              <div
                style={{
                  fontSize: '22px',
                  marginBottom: '8px',
                  color: phase.color,
                  lineHeight: 1,
                }}
              >
                {phase.icon}
              </div>
              <div
                style={{
                  color: phase.color,
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {phase.label}
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '12px',
            marginTop: '16px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {[
            { val: '12', label: 'Projects' },
            { val: '2+', label: 'Years' },
            // { val: '100%', label: 'Shipped' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--color-foreground)',
                  lineHeight: 1,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontSize: '10px',
                  color: 'var(--color-muted-foreground)',
                  marginTop: '3px',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glow behind card */}
      <div
        style={{
          position: 'absolute',
          inset: '20%',
          background: 'radial-gradient(ellipse at center, rgba(124,92,252,0.15) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Floating chips */}
      {floatChips.map((chip, i) => (
        <div
          key={i}
          className={i % 2 === 0 ? 'animate-float' : 'animate-float-reverse'}
          style={{
            position: 'absolute',
            ...chip.style,
            background: `${chip.color}12`,
            border: `1px solid ${chip.color}35`,
            borderRadius: '100px',
            padding: '7px 14px',
            fontSize: '12px',
            fontWeight: 600,
            color: chip.color,
            whiteSpace: 'nowrap',
            fontFamily: "'DM Sans', sans-serif",
            animationDelay: chip.delay,
            zIndex: 3,
            backdropFilter: 'blur(8px)',
          }}
        >
          {chip.label}
        </div>
      ))}
    </div>
  )
}

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const currentText = texts[currentIndex]
    if (!deleting && displayed.length < currentText.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length + 1))
      }, 60)
    } else if (!deleting && displayed.length === currentText.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1))
      }, 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setCurrentIndex((i) => (i + 1) % texts.length)
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [displayed, deleting, currentIndex, texts])

  return (
    <span>
      <span className="text-gradient-accent">{displayed}</span>
      <span className="animate-blink" style={{ color: '#00D4A0' }}>|</span>
    </span>
  )
}

export default function Home({ navigate }: { navigate: NavigateFn }) {
  const featuredProjects = [...projects]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3)

  const { ref: processRef, inView: processVisible } = useInView()
  const { ref: skillsRef, inView: skillsVisible } = useInView()
  const { ref: projectsRef, inView: projectsVisible } = useInView()
  // const { ref: testimonialsRef, inView: testimonialsVisible } = useInView()
  const { ref: ctaRef, inView: ctaVisible } = useInView()

  return (
    <div className="page-wrapper">
      {/* ── Hero ── */}
      <section
        className="grid-bg hero-section"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '30%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(ellipse at center, rgba(124,92,252,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '20%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(0,212,160,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className="container hero-grid hero-grid-home"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left: text */}
          <div>
            {/* Eyebrow */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: '0s', marginBottom: '24px' }}
            >
              <span className="section-label">
                <span style={{ color: '#00D4A0' }}>●</span>
                Available for projects
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up"
              style={{
                animationDelay: '0.1s',
                fontSize: 'clamp(38px, 5vw, 68px)',
                lineHeight: '1.05',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                color: 'var(--color-foreground)',
                marginBottom: '16px',
                letterSpacing: '-0.03em',
              }}
            >
              I Design{' '}
              <em
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  background: 'linear-gradient(135deg, #A78BFA 0%, #7C5CFC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Digital Experiences
              </em>
              {' '}& Build Powerful{' '}
              <em
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  background: 'linear-gradient(135deg, #00D4A0 0%, #5CF6D8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Digital Products.
              </em>
            </h1>

            {/* Typewriter */}
            <div
              className="animate-fade-up"
              style={{
                animationDelay: '0.2s',
                fontSize: '18px',
                color: 'var(--color-secondary-foreground)',
                marginBottom: '16px',
                fontFamily: "'DM Sans', sans-serif",
                minHeight: '28px',
              }}
            >
              Specializing in{' '}
              <TypewriterText texts={['user research', 'UI/UX design', 'interactive prototyping', 'design systems']} />
            </div>

            {/* Subtext */}
            <p
              className="animate-fade-up"
              style={{
                animationDelay: '0.25s',
                fontSize: '16px',
                lineHeight: '1.7',
                color: 'var(--color-muted-foreground)',
                marginBottom: '40px',
                maxWidth: '480px',
              }}
            >
              I create thoughtful, accessible digital experiences that make complex tasks feel simple. From early research to polished prototypes, every decision is grounded in real user needs.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up btn-stack-mobile"
              style={{
                animationDelay: '0.3s',
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <button className="btn-primary" onClick={() => navigate('work')}>
                View My Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="btn-secondary" onClick={() => navigate('contact')}>
                Let's Work Together
              </button>
            </div>

            {/* Social links */}
            <div
              className="animate-fade-up"
              style={{
                animationDelay: '0.4s',
                display: 'flex',
                gap: '16px',
                marginTop: '40px',
                alignItems: 'center',
              }}
            >
              {[
                // { label: 'Dribbble', href: '#' },
                { label: 'Behance', href: 'https://www.behance.net/aarishkhattak' },
              
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    color: 'var(--color-muted-foreground)',
                    fontSize: '13px',
                    fontFamily: "'JetBrains Mono', monospace",
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = '#A78BFA')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-muted-foreground)')
                  }
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div
            className="animate-fade-up hero-visual"
            style={{ animationDelay: '0.2s' }}
          >
            <HeroVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="scroll-indicator"
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.4,
          }}
        >
          <span
            style={{
              fontSize: '10px',
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--color-muted-foreground)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 40,
              background: 'linear-gradient(to bottom, rgba(124,92,252,0.8), transparent)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <Section spacing="loose">
        <div className="container">
          <div
            ref={projectsRef}
            style={{ marginBottom: '56px' }}
          >
            <div className={`reveal ${projectsVisible ? 'visible' : ''}`}>
              <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>
                Selected Work
              </span>
            </div>
            <div
              className={`reveal reveal-delay-1 ${projectsVisible ? 'visible' : ''}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginTop: '16px',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'var(--color-foreground)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                }}
              >
                Projects that{' '}
                <em
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  shipped & scaled
                </em>
              </h2>
              <button
                onClick={() => navigate('work')}
                style={{
                  color: '#A78BFA',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.gap = '10px'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.gap = '6px'
                }}
              >
                View all work →
              </button>
            </div>
          </div>

          {/* Project cards — asymmetric grid */}
          <div
            className="grid-3col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
          >
            {featuredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`glass-card glass-card-hover reveal reveal-delay-${i + 1} ${projectsVisible ? 'visible' : ''}`}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  ...(i === 0 ? { gridRow: 'span 1' } : {}),
                }}
                onClick={() => navigate('casestudy', project)}
              >
                {/* Image */}
                <div
                  style={{
                    height: i === 0 ? '220px' : '180px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: `${project.accent}15`,
                  }}
                >
                  <ProjectMedia
                    project={project}
                    alt={project.title}
                    style={{ transition: 'transform 0.4s ease' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to top, ${project.accent}20, transparent)`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                    }}
                  >
                    <span
                      className="tag-pill"
                      style={{
                        background: `${project.accent}20`,
                        borderColor: `${project.accent}40`,
                        color: project.accent,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '8px',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: 'var(--color-foreground)',
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        color: 'var(--color-muted-foreground)',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                      }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-muted-foreground)',
                      lineHeight: '1.65',
                      marginBottom: '16px',
                    }}
                  >
                    {project.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Process ── */}
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
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>
                How I Work
              </span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'var(--color-foreground)',
                  letterSpacing: '-0.03em',
                  marginTop: '16px',
                  lineHeight: 1.15,
                }}
              >
                From{' '}
                <em
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  idea
                </em>{' '}
                to{' '}
                <em
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: '#A78BFA',
                  }}
                >
                  shipped product
                </em>
              </h2>
            </div>

            <div
              className="grid-4col"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
                position: 'relative',
              }}
            >
              {/* Connector line */}
              <div
                className="process-connector"
                style={{
                  position: 'absolute',
                  top: '44px',
                  left: 'calc(12.5% + 24px)',
                  right: 'calc(12.5% + 24px)',
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(124,92,252,0.4), rgba(0,212,160,0.4))',
                  zIndex: 0,
                }}
              />
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className={`glass-card reveal reveal-delay-${i + 1} ${processVisible ? 'visible' : ''}`}
                  style={{
                    borderRadius: '16px',
                    padding: '28px 20px',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: `${step.color}15`,
                      border: `1px solid ${step.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      fontSize: '20px',
                      color: step.color,
                    }}
                  >
                    {step.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      color: step.color,
                      letterSpacing: '0.08em',
                      marginBottom: '6px',
                    }}
                  >
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--color-foreground)',
                      fontFamily: "'DM Sans', sans-serif",
                      marginBottom: '10px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{ fontSize: '13px', color: 'var(--color-muted-foreground)', lineHeight: '1.65' }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Tech Stack ── */}
      <Section>
        <div className="container">
          <div ref={skillsRef}>
            <div
              className={`reveal ${skillsVisible ? 'visible' : ''}`}
              style={{ textAlign: 'center', marginBottom: '48px' }}
            >
              <span className="section-label" style={{ marginBottom: '16px', display: 'inline-flex' }}>
                Tech Stack
              </span>
              <h2
                style={{
                  fontSize: 'clamp(26px, 3vw, 40px)',
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'var(--color-foreground)',
                  letterSpacing: '-0.03em',
                  marginTop: '16px',
                  lineHeight: 1.2,
                }}
              >
                Tools I use to{' '}
                <em
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  build & design
                </em>
              </h2>
            </div>
            <div
              className={`reveal reveal-delay-2 ${skillsVisible ? 'visible' : ''}`}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
              }}
            >
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="glass-card glass-card-hover"
                  style={{
                    borderRadius: '10px',
                    padding: '10px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'default',
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: tech.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--color-foreground)',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Testimonials ── */}
      

      {/* ── CTA ── */}
      <Section spacing="loose">
        <div className="container">
          <div
            ref={ctaRef}
            className={`glass-card reveal ${ctaVisible ? 'visible' : ''}`}
            style={{
              borderRadius: '24px',
              padding: 'clamp(48px, 6vw, 80px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(ellipse at 50% 0%, rgba(124,92,252,0.12) 0%, transparent 60%)',
                pointerEvents: 'none',
              }}
            />
            <span
              className="section-label"
              style={{ display: 'inline-flex', marginBottom: '24px', position: 'relative' }}
            >
              Open to Opportunities
            </span>
            <h2
              style={{
                fontSize: 'clamp(30px, 4vw, 56px)',
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                color: 'var(--color-foreground)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '20px',
                position: 'relative',
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
                Let's build something
              </em>{' '}
              meaningful.
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: 'var(--color-muted-foreground)',
                lineHeight: '1.7',
                maxWidth: '560px',
                margin: '0 auto 40px',
                position: 'relative',
              }}
            >
              Whether you need a new product experience, a UX design overhaul,
              or a full product sprint — I'm ready to turn your vision into reality.
            </p>
            <div
              className="btn-stack-mobile"
              style={{
                display: 'flex',
                gap: '14px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                position: 'relative',
              }}
            >
              <button className="btn-primary" onClick={() => navigate('contact')}>
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="btn-secondary" onClick={() => navigate('work')}>
                Browse Projects
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '32px 0',
        }}
      >
        <div
          className="container footer-row"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              color: 'var(--color-muted-foreground)',
            }}
          >
            © 2026 Maryam Tauheed · UI/UX Design
          </span>
          {/* <div style={{ display: 'flex', gap: '24px' }}>
            {['GitHub', 'LinkedIn', 'Behance'].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontSize: '12px',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'var(--color-muted-foreground)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = '#A78BFA')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-muted-foreground)')
                }
              >
                {s}
              </a>
            ))}
          </div> */}
        </div>
      </footer>
    </div>
  )
}
