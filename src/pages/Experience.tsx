import { useInView } from '../hooks/useInView'
import Section from '../components/Section'
import type { NavigateFn } from '../App'

const experiences = [
  {
    period: 'May 2024 – Present',
    title: 'UI/UX Designer',
    type: 'Inara Technolgies',
    desc: "UI/UX Designer focused on creating intuitive, accessible digital experiences for startups and growing businesses. I combine user research, interaction design, and prototyping to shape polished products across multiple industries.",
    responsibilities: [
      'Led end-to-end product design from discovery and wireframes through high-fidelity prototypes and developer handoff.',
      'Built reusable design components and interaction patterns to improve consistency across product experiences.',
      'Collaborated closely with backend engineers and product managers in an agile environment, contributing to the successful early launch of key projects.',
      'Designed intuitive and responsive user interfaces for web and mobile applications, ensuring seamless user experiences aligned with client goals.',
      'Conducted user research and usability testing to inform design decisions and improve user engagement.',
      'Created wireframes, prototypes, and design systems using Figma and Adobe XD for consistent and scalable design workflows.',
      'Delivered pixel-perfect UI assets and maintained cross-platform design consistency across Android, iOS, and web platforms.',
      
    ],
    skills: ['User Research', 'Figma', 'Prototyping', 'Design Systems', 'Senior UI/UX', 'Adobe Illustrator', 'Adobe XD'],
    color: '#7C5CFC',
  },
  {
    period: 'Feb 2024 – May 2024',
    title: 'UI/UX Designer (Part Time)',
    type: 'Radiant Spark',
   // desc: "Delivered 6 cross-platform mobile apps across 18 months at a product studio. Led a small team of developers and collaborated with in-house designers to ship apps used by 100K+ users.",
    responsibilities: [
      'Designed user-centered interfaces for web and mobile applications, focusing on improving usability and visual appeal.',
      'Developed interactive prototypes and wireframes using Figma to communicate design concepts effectively.',
      'Collaborated with cross-functional teams to align design strategies with business objectives and user needs.',
      'Conducted user feedback sessions & implemented UI refinements to enhance overall user experience.',
      'Ensured design consistency across platforms through reusable components and style guides.',
    ],
    skills: ['Figma', 'Adobe Xd', 'ADobe Illustrator', 'Canva',],
    color: '#00D4A0',
  },
  
]

const education = [
  {
    year: '2019-2023',
    degree: 'BSc Computer Science',
    institution: 'University of Peshawar',
    desc: "Bachelor of Science in Computer Science from the University of Peshawar. My studies built a strong foundation in understanding digital products, user needs, and the systems behind them.",
    color: '#FFA000',
  },
]

const certifications = [
  { name: 'Goolge UX Certified', issuer: 'Google (Coursera)', year: '2023', color: '#3DDC84' },
  // { name: 'Firebase Certified Developer', issuer: 'Google', year: '2023', color: '#FFA000' },
]

export default function Experience({ navigate }: { navigate: NavigateFn }) {
  const { ref: headerRef, inView: headerVisible } = useInView(0.05)
  const { ref: expRef, inView: expVisible } = useInView()
  const { ref: eduRef, inView: eduVisible } = useInView()

  return (
    <div className="page-wrapper">
      {/* Header */}
      <section
        ref={headerRef}
        style={{ padding: 'clamp(80px, 10vw, 120px) 0 64px' }}
      >
        <div className="container">
          <div className={`reveal ${headerVisible ? 'visible' : ''}`}>
            <span className="section-label" style={{ display: 'inline-flex', marginBottom: '20px' }}>
              Experience
            </span>
          </div>
          <h1
            className={`reveal reveal-delay-1 ${headerVisible ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              color: 'var(--color-foreground)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginTop: '16px',
              marginBottom: '20px',
            }}
          >
            Professional{' '}
            <em
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#A78BFA',
              }}
            >
              journey
            </em>
          </h1>
          <p
            className={`reveal reveal-delay-2 ${headerVisible ? 'visible' : ''}`}
            style={{
              fontSize: '18px',
              color: 'var(--color-secondary-foreground)',
              lineHeight: '1.7',
              maxWidth: '560px',
            }}
          >
           UI/UX Designer with 2+ years of experience creating user-focused digital experiences, from early research and design concepts to polished, developer-ready prototypes.
          </p>

          {/* Quick stats */}
          <div
            className={`reveal reveal-delay-3 ${headerVisible ? 'visible' : ''}`}
            style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              marginTop: '48px',
            }}
          >
            {[
              { val: '2+', label: 'Years Experience', color: '#7C5CFC' },
              { val: '12', label: 'Projects Done', color: '#00D4A0' },
              // { val: '500K+', label: 'App Downloads', color: '#FC5C7D' },
              // { val: '12+', label: 'Happy Clients', color: '#FFB347' },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-card"
                style={{
                  borderRadius: '14px',
                  padding: '20px 24px',
                  minWidth: '120px',
                }}
              >
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: s.color,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--color-muted-foreground)',
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.04em',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <Section>
        <div className="container" ref={expRef}>
          <div className={`reveal ${expVisible ? 'visible' : ''}`} style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                color: 'var(--color-foreground)',
                letterSpacing: '-0.03em',
              }}
            >
              Work Experience
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div
              className="experience-timeline-line"
              style={{
                position: 'absolute',
                left: '20px',
                top: '24px',
                bottom: '24px',
                width: '2px',
                background: 'linear-gradient(to bottom, #7C5CFC, #00D4A0, #FC5C7D, #FFB347, transparent)',
                borderRadius: '2px',
              }}
            />

            <div className="experience-timeline-list" style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingLeft: '56px' }}>
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} ${expVisible ? 'visible' : ''}`}
                  style={{ position: 'relative' }}
                >
                  {/* Timeline dot */}
                  <div
                    className="experience-timeline-dot"
                    style={{
                      position: 'absolute',
                      left: '-44px',
                      top: '20px',
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      background: exp.color,
                      border: `2px solid ${exp.color}`,
                      boxShadow: `0 0 14px ${exp.color}50`,
                    }}
                  />

                  <div
                    className="experience-card glass-card"
                    style={{
                      borderRadius: '16px',
                      padding: '28px 32px',
                      borderLeft: `3px solid ${exp.color}40`,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginBottom: '10px',
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: 'var(--color-foreground)',
                            fontFamily: "'DM Sans', sans-serif",
                            letterSpacing: '-0.02em',
                            marginBottom: '4px',
                          }}
                        >
                          {exp.title}
                        </h3>
                        <span
                          style={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: exp.color,
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <span
                        className="tag-pill"
                        style={{
                          background: `${exp.color}10`,
                          borderColor: `${exp.color}25`,
                          color: exp.color,
                          fontSize: '12px',
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--color-secondary-foreground)',
                        lineHeight: '1.7',
                        marginBottom: '20px',
                      }}
                    >
                      {exp.desc}
                    </p>

                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        marginBottom: '20px',
                        paddingLeft: 0,
                        listStyle: 'none',
                      }}
                    >
                      {exp.responsibilities.map((r, ri) => (
                        <li
                          key={ri}
                          style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'flex-start',
                            fontSize: '14px',
                            color: 'var(--color-muted-foreground)',
                            lineHeight: '1.6',
                          }}
                        >
                          <span style={{ color: exp.color, marginTop: '1px', flexShrink: 0 }}>→</span>
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="tag-pill"
                          style={{
                            background: `${exp.color}10`,
                            borderColor: `${exp.color}22`,
                            color: exp.color,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Education & Certifications */}
      <Section
        style={{
          background: 'rgba(255,255,255,0.015)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container" ref={eduRef}>
          <div
            className="grid-2col"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
            }}
          >
            {/* Education */}
            <div>
              <div
                className={`reveal ${eduVisible ? 'visible' : ''}`}
                style={{ marginBottom: '32px' }}
              >
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    color: 'var(--color-foreground)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Education
                </h2>
              </div>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={`glass-card reveal reveal-delay-1 ${eduVisible ? 'visible' : ''}`}
                  style={{
                    borderRadius: '14px',
                    padding: '24px',
                    borderLeft: `3px solid ${edu.color}40`,
                  }}
                >
                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--color-foreground)',
                      fontFamily: "'DM Sans', sans-serif",
                      marginBottom: '4px',
                    }}
                  >
                    {edu.degree}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: edu.color,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      marginBottom: '4px',
                    }}
                  >
                    {edu.institution}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--color-muted-foreground)',
                      fontFamily: "'JetBrains Mono', monospace",
                      marginBottom: '12px',
                    }}
                  >
                    {edu.year}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-secondary-foreground)', lineHeight: '1.65' }}>
                    {edu.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div
                className={`reveal ${eduVisible ? 'visible' : ''}`}
                style={{ marginBottom: '32px' }}
              >
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    color: 'var(--color-foreground)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Certifications
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className={`glass-card reveal reveal-delay-${i + 1} ${eduVisible ? 'visible' : ''}`}
                    style={{
                      borderRadius: '12px',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '9px',
                        background: `${cert.color}15`,
                        border: `1px solid ${cert.color}28`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: cert.color,
                        }}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: 'var(--color-foreground)',
                          fontFamily: "'DM Sans', sans-serif",
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {cert.name}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: 'var(--color-muted-foreground)',
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {cert.issuer} · {cert.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="tight">
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
            Let's write the next chapter together.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-muted-foreground)', marginBottom: '28px' }}>
            Open to freelance contracts, consulting engagements, and full-time opportunities.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('contact')}>
              Get in Touch
            </button>
            <button className="btn-secondary" onClick={() => navigate('work')}>
              See My Work
            </button>
          </div>
        </div>
      </Section>
    </div>
  )
}
