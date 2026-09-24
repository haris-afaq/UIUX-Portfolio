import { useInView } from '../hooks/useInView'
import type { Project } from '../data/projects'
import { hasCategory } from '../data/projects'
import type { NavigateFn } from '../App'
import Section from '../components/Section'
import ProjectMedia from '../components/ProjectMedia'

interface CaseStudyProps {
  project: Project
  navigate: NavigateFn
}

const sectionImages = [
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&h=600&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=600&fit=crop&auto=format',
]

export default function CaseStudy({ project, navigate }: CaseStudyProps) {
  const { ref: overviewRef, inView: overviewVisible } = useInView(0.05)
  const { ref: processRef, inView: processVisible } = useInView()
  const { ref: resultsRef, inView: resultsVisible } = useInView()

  const isDesignProject = hasCategory(project, 'UI/UX Design')

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: 'clamp(420px, 50vh, 600px)',
          overflow: 'hidden',
        }}
      >
        <ProjectMedia
          project={project}
          alt={project.title}
          style={{
            position: 'absolute',
            inset: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(8,9,15,0.3) 0%, rgba(8,9,15,0.9) 100%)',
          }}
        />
        {/* Back button */}
        <div
          className="case-study-nav-inner"
          style={{
            position: 'absolute',
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '1200px',
            padding: '0 32px',
          }}
        >
          <button
            onClick={() => navigate('work')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '100px',
              padding: '8px 16px',
              color: '#EDEEF2',
              fontSize: '13px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              cursor: 'pointer',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.14)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)'
            }}
          >
            ← Back to Work
          </button>
        </div>

        {/* Hero text */}
        <div
          className="case-study-hero-content"
          style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '1200px',
            padding: '0 32px 48px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
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
            <span className="tag-pill" style={{ background: 'rgba(8,9,15,0.6)' }}>
              {project.platform}
            </span>
            <span className="tag-pill" style={{ background: 'rgba(8,9,15,0.6)' }}>
              {project.year}
            </span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              color: '#EDEEF2',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontSize: '17px',
              color: 'rgba(237,238,242,0.7)',
              maxWidth: '580px',
              lineHeight: '1.65',
            }}
          >
            {project.desc}
          </p>
        </div>
      </section>

      {/* Project meta */}
      <Section spacing="tight">
        <div className="container">
          <div
            className="glass-card meta-card"
            style={{
              borderRadius: '16px',
              padding: '24px 32px',
              margin: '0 0 0 0',
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap',
              marginTop: '-1px',
            }}
          >
            {[
              { label: 'Role', val: project.role },
              { label: 'Platform', val: project.platform },
              { label: 'Year', val: project.year },
              { label: 'Stack', val: project.tags.slice(0, 3).join(', ') },
            ].map((m) => (
              <div key={m.label} style={{ flex: 1, minWidth: '120px' }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    color: '#606476',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  {m.label}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#EDEEF2',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {m.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section>
        <div className="container" ref={overviewRef}>
          <div
            className="grid-2col"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'flex-start',
            }}
          >
            <div>
              <div className={`reveal ${overviewVisible ? 'visible' : ''}`}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: project.accent,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '12px',
                  }}
                >
                  Project Overview
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(26px, 3vw, 38px)',
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#EDEEF2',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    marginBottom: '20px',
                  }}
                >
                  The{' '}
                  <em
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontStyle: 'italic',
                      fontWeight: 400,
                    }}
                  >
                    context
                  </em>
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#9194A8',
                    lineHeight: '1.75',
                  }}
                >
                  {project.overview}
                </p>
              </div>
            </div>
            <div>
              <div
                className={`glass-card reveal reveal-delay-2 ${overviewVisible ? 'visible' : ''}`}
                style={{
                  borderRadius: '16px',
                  padding: '28px',
                  borderLeft: `3px solid ${project.accent}40`,
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px',
                      color: '#FC5C7D',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    The Challenge
                  </span>
                  <p style={{ fontSize: '14px', color: '#9194A8', lineHeight: '1.7' }}>
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px',
                      color: '#00D4A0',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    The Solution
                  </span>
                  <p style={{ fontSize: '14px', color: '#9194A8', lineHeight: '1.7' }}>
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section
        style={{
          background: 'rgba(255,255,255,0.015)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container" ref={processRef}>
          <div className={`reveal ${processVisible ? 'visible' : ''}`} style={{ marginBottom: '48px' }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: project.accent,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              {isDesignProject ? 'Design Process' : 'Development Process'}
            </span>
            <h2
              style={{
                fontSize: 'clamp(26px, 3vw, 40px)',
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                color: '#EDEEF2',
                letterSpacing: '-0.03em',
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
                approached it
              </em>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {(isDesignProject
              ? [
                  { step: '01', title: 'User Research', desc: 'Interviews, surveys, and competitive analysis to understand real user needs and pain points.' },
                  { step: '02', title: 'Information Architecture', desc: 'Sitemap and user flow mapping aligned with user mental models.' },
                  { step: '03', title: 'Wireframing', desc: 'Low-fidelity explorations iterated quickly based on feedback.' },
                  { step: '04', title: 'Visual Design', desc: 'High-fidelity screens with a complete, documented design system.' },
                  { step: '05', title: 'Prototype & Test', desc: 'Figma prototype validated with real users before handoff.' },
                ]
              : [
                  { step: '01', title: 'Architecture Design', desc: 'Clean layered architecture with repository pattern and dependency injection.' },
                  { step: '02', title: 'UI Implementation', desc: 'Pixel-perfect widget composition matching design specifications.' },
                  { step: '03', title: 'API Integration', desc: 'Type-safe REST clients with proper error handling and retry logic.' },
                  { step: '04', title: 'State Management', desc: 'Predictable state with BLoC/Riverpod, easy to debug and extend.' },
                  { step: '05', title: 'Testing & Deploy', desc: 'Unit tests, widget tests, CI/CD pipeline, and App Store release.' },
                ]
            ).map((item, i) => (
              <div
                key={i}
                className={`glass-card reveal reveal-delay-${i + 1} ${processVisible ? 'visible' : ''}`}
                style={{ borderRadius: '14px', padding: '20px' }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: project.accent,
                    letterSpacing: '0.08em',
                    marginBottom: '8px',
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#EDEEF2',
                    fontFamily: "'DM Sans', sans-serif",
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#606476', lineHeight: '1.65' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Process image */}
          <div
            className={`reveal reveal-delay-3 ${processVisible ? 'visible' : ''}`}
            style={{ marginTop: '40px' }}
          >
            <img
              src={sectionImages[0]}
              alt={`${project.title} design process`}
              style={{
                width: '100%',
                height: '320px',
                objectFit: 'cover',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            />
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section>
        <div className="container" ref={resultsRef}>
          <div className={`reveal ${resultsVisible ? 'visible' : ''}`} style={{ marginBottom: '48px' }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: project.accent,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Outcomes
            </span>
            <h2
              style={{
                fontSize: 'clamp(26px, 3vw, 40px)',
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                color: '#EDEEF2',
                letterSpacing: '-0.03em',
              }}
            >
              The{' '}
              <em
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: project.accent,
                }}
              >
                results
              </em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {project.results.map((result, i) => (
              <div
                key={i}
                className={`glass-card reveal reveal-delay-${i + 1} ${resultsVisible ? 'visible' : ''}`}
                style={{
                  borderRadius: '14px',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  borderLeft: `3px solid ${project.accent}40`,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '8px',
                    background: `${project.accent}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    color: project.accent,
                    flexShrink: 0,
                    fontWeight: 700,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#EDEEF2',
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: '1.5',
                    fontWeight: 500,
                  }}
                >
                  {result}
                </p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div
            className={`reveal reveal-delay-4 ${resultsVisible ? 'visible' : ''}`}
            style={{ marginTop: '32px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="tag-pill"
                style={{
                  background: `${project.accent}10`,
                  borderColor: `${project.accent}22`,
                  color: project.accent,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Navigation between projects */}
      <Section
        spacing="tight"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <button
              onClick={() => navigate('work')}
              className="btn-secondary"
              style={{ gap: '8px' }}
            >
              ← All Projects
            </button>
            <button className="btn-primary" onClick={() => navigate('contact')}>
              Start a Similar Project →
            </button>
          </div>
        </div>
      </Section>
    </div>
  )
}
