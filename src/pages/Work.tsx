import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { projects, categories, hasCategory } from '../data/projects'
import Section from '../components/Section'
import ProjectMedia from '../components/ProjectMedia'
import type { NavigateFn } from '../App'

export default function Work({ navigate }: { navigate: NavigateFn }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const { ref: headerRef, inView: headerVisible } = useInView(0.05)

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => hasCategory(project, activeCategory))

  return (
    <div className="page-wrapper">
      {/* Header */}
      <Section spacing="loose">
        <div className="container" ref={headerRef}>
          <div className={`reveal ${headerVisible ? 'visible' : ''}`}>
            <span className="section-label" style={{ display: 'inline-flex', marginBottom: '20px' }}>
              Portfolio
            </span>
          </div>
          <div
            className={`reveal reveal-delay-1 ${headerVisible ? 'visible' : ''}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                color: '#EDEEF2',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Selected{' '}
              <em
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#A78BFA',
                }}
              >
                work
              </em>
            </h1>
            <p
              style={{
                fontSize: '16px',
                color: '#606476',
                maxWidth: '400px',
                lineHeight: '1.7',
              }}
            >
              Digital product experiences shaped around real users and real business goals.
            </p>
          </div>

          {/* Category filters */}
          <div
            className={`reveal reveal-delay-2 ${headerVisible ? 'visible' : ''}`}
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginTop: '40px',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '100px',
                  background:
                    activeCategory === cat ? '#7C5CFC' : 'rgba(255,255,255,0.04)',
                  border:
                    activeCategory === cat
                      ? '1px solid #7C5CFC'
                      : '1px solid rgba(255,255,255,0.08)',
                  color: activeCategory === cat ? '#FFFFFF' : '#9194A8',
                  fontSize: '13px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                      'rgba(124,92,252,0.3)'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#EDEEF2'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                      'rgba(255,255,255,0.08)'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#9194A8'
                  }
                }}
              >
                {cat}
                {cat !== 'All' && (
                  <span
                    style={{
                      marginLeft: '6px',
                      background: activeCategory === cat
                        ? 'rgba(255,255,255,0.2)'
                        : 'rgba(255,255,255,0.06)',
                      borderRadius: '4px',
                      padding: '1px 6px',
                      fontSize: '11px',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {projects.filter((project) => hasCategory(project, cat)).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Project grid */}
      <Section>
        <div className="container">
          <div
            className="work-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '20px',
            }}
          >
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="glass-card glass-card-hover"
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  animation: `fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s forwards`,
                }}
                onClick={() => navigate('casestudy', project)}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    height: '220px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: `${project.accent}10`,
                  }}
                >
                  <ProjectMedia
                    project={project}
                    alt={project.title}
                    style={{ transition: 'transform 0.5s ease' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(8,9,15,0.5) 0%, transparent 50%)',
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                  {/* Hover overlay */}
                  <div
                    className="project-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `${project.accent}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLDivElement).style.opacity = '1'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLDivElement).style.opacity = '0'
                    }}
                  >
                    <div
                      style={{
                        background: `${project.accent}`,
                        color: '#08090F',
                        padding: '10px 20px',
                        borderRadius: '100px',
                        fontSize: '13px',
                        fontWeight: 700,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      View Case Study →
                    </div>
                  </div>
                  {/* Category badge */}
                  <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
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
                  <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
                    <span
                      className="tag-pill"
                      style={{ background: 'rgba(8,9,15,0.7)' }}
                    >
                      {project.platform}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '22px' }}>
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
                        fontSize: '19px',
                        fontWeight: 700,
                        color: '#EDEEF2',
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                        color: '#606476',
                      }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#606476',
                      lineHeight: '1.65',
                      marginBottom: '16px',
                    }}
                  >
                    {project.desc}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      gap: '6px',
                      flexWrap: 'wrap',
                      marginBottom: '18px',
                    }}
                  >
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="tag-pill">+{project.tags.length - 3}</span>
                    )}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        color: project.accent,
                        fontWeight: 600,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {project.role}
                    </span>
                    <span
                      style={{
                        fontSize: '13px',
                        color: '#A78BFA',
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      View →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 0', color: '#606476' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>◎</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif" }}>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section
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
              color: '#EDEEF2',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Want to add your project to this list?
          </h2>
          <p style={{ fontSize: '16px', color: '#606476', marginBottom: '28px' }}>
            I'm currently open for freelance UI/UX design projects.
          </p>
          <button className="btn-primary" onClick={() => navigate('contact')}>
            Let's Collaborate
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </Section>
    </div>
  )
}
