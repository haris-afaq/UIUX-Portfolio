import { useInView } from '../hooks/useInView'
import Section from '../components/Section'
import type { NavigateFn } from '../App'
// import profileImage from '../assets/profile.png'

const skills = [
  { name: 'Figma', level: 93, color: '#F24E1E', category: 'Design' },
  { name: 'UI/UX Design', level: 90, color: '#7C5CFC', category: 'Design' },
  { name: 'Prototyping', level: 89, color: '#FF7262', category: 'Design' },
  { name: 'Wireframing', level: 95, color: '#54C5F8', category: 'Design' },
  { name: 'User Research', level: 85, color: '#00D4A0', category: 'Design' },
  { name: 'Design Systems', level: 88, color: '#FC5C7D', category: 'Design' },
]
const timeline = [
  {
     year: '1',
    title: 'User-centered product design from research to prototype.',
    // company: 'Freelance / Contract',
    desc: "I create responsive and adaptive user interfaces that deliver a consistent experience across mobile, tablet, and web platforms, ensuring optimal usability, accessibility, and performance on different screen sizes.",
    color: '#7C5CFC',
    tags: ['User Research', 'Wireframing', 'Prototyping'],
  },
  {
    year: '2',
    title: 'Responsive UI for mobile, tablet, and web',
    // company: 'TechVentures Studio',
    desc: "Built and shipped 6 cross-platform mobile applications across health, fintech, and productivity sectors. Led a team of 3 junior developers.",
    color: '#00D4A0',
    tags: ['Responsive Design', 'Adaptive Layouts', 'Cross-Platform UI', 'Design System', 'Mobile, Tablet & Web Support'],
  },
  {
    year: '3',
    title: 'Design systems & UX polish with subtle motion',
    // company: 'Digital Product Agency',
    desc: "I design scalable design systems and polished user experiences with consistent components, thoughtful interactions, and subtle animations that enhance usability without distracting from the core experience.",
    color: '#FC5C7D',
    tags: ['Design Systems', 'UX Design', 'Micro Interactions',],
  },
  {
    year: '4',
    title: 'Performance Optimization & App Quality',
    company: '',
    desc: "I create clear, consistent interfaces through thoughtful interaction design, accessible patterns, and reusable components.",
    color: '#FFB347',
    tags: ['Code Quality', 'Debugging & Testing',],
  },
  
]

const values = [
  {
    icon: '◈',
    title: 'Craft',
    desc: "Interfaces should feel simple, calm and intentional, with every element touchgtfully placed to improve clarity, support usability, and maintain focus, creating a seamless and intuitive user experience.",
    color: '#7C5CFC',
  },
  {
    icon: '◎',
    title: 'Clarity',
    desc: "I build readable, modular architecture that evolves with the product, maintaining clarity, reduce technical debt, and making on going development efficient and sustainable.",
    color: '#00D4A0',
  },
  {
    icon: '◆',
    title: 'Impact',
    desc: "I prioritize changes that improve both product metrices and user satisfaction, delivering outcomes that matters while maintaining a balance between design vision and technical execution.",
    color: '#FC5C7D',
  },
  {
    icon: '◉',
    title: 'Currently',
    desc: 'I welcome opportunities to create useful, accessible digital products through thoughtful UI/UX design.',
    color: '#FFB347',
  },
]

function SkillBar({ skill, visible }: { skill: typeof skills[0]; visible: boolean }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: skill.color,
            }}
          />
          <span
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-foreground)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {skill.name}
          </span>
        </div>
        <span
          style={{
            fontSize: '12px',
            fontFamily: "'JetBrains Mono', monospace",
            color: 'var(--color-muted-foreground)',
          }}
        >
          {skill.level}%
        </span>
      </div>
      <div
        style={{
          height: 4,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            borderRadius: '4px',
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
            width: visible ? `${skill.level}%` : '0%',
            transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>
    </div>
  )
}

export default function About({ navigate }: { navigate: NavigateFn }) {
  const { ref: heroRef, inView: heroVisible } = useInView(0.05)
  const { ref: skillsRef, inView: skillsVisible } = useInView()
  const { ref: timelineRef, inView: timelineVisible } = useInView()
  const { ref: valuesRef, inView: valuesVisible } = useInView()

  return (
    <div className="page-wrapper">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        style={{
          padding: 'clamp(80px, 10vw, 120px) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(124,92,252,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container">
          <div
            className="grid-2col hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            <div>
              <div className={`reveal ${heroVisible ? 'visible' : ''}`}>
                <span className="section-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>
                  About Me
                </span>
              </div>
              <h1
                className={`reveal reveal-delay-1 ${heroVisible ? 'visible' : ''}`}
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 60px)',
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'var(--color-foreground)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginTop: '16px',
                  marginBottom: '24px',
                }}
              >
                The person{' '}
                <em
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: '#A78BFA',
                  }}
                >
                  behind the work
                </em>
              </h1>
              <p
                className={`reveal reveal-delay-2 ${heroVisible ? 'visible' : ''}`}
                style={{
                  fontSize: '17px',
                  lineHeight: '1.75',
                  color: 'var(--color-secondary-foreground)',
                  marginBottom: '20px',
                }}
              >
                I'm Maryam — a UI/UX designer who believes the
                best digital products are built by people who don't treat design and
                engineering as separate disciplines.
              </p>
              <p
                className={`reveal reveal-delay-3 ${heroVisible ? 'visible' : ''}`}
                style={{
                  fontSize: '17px',
                  lineHeight: '1.75',
                  color: 'var(--color-secondary-foreground)',
                  marginBottom: '36px',
                }}
              >
                With 2+ years of professional experience, I've shipped apps used by
                people across health, finance, education,
                and productivity sectors.
              </p>
              <div
                className={`reveal reveal-delay-4 ${heroVisible ? 'visible' : ''} btn-stack-mobile`}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
              >
                <button className="btn-primary" onClick={() => navigate('work')}>
                  View My Work
                </button>
                <button className="btn-secondary" onClick={() => navigate('contact')}>
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Profile visual */}
            <div
              className={`reveal reveal-delay-2 ${heroVisible ? 'visible' : ''}`}
              style={{ position: 'relative' }}
            >
              <div
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  // src={profileImage}
                  alt="Maryam Tauheed — UI/UX Designer"
                  className="profile-img"
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
                {/* Overlay info card */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(8, 9, 15, 0.85)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '14px',
                    padding: '16px 20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'var(--color-foreground)',
                      fontFamily: "'DM Sans', sans-serif",
                      marginBottom: '4px',
                    }}
                  >
                    Maryam Tauheed
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--color-secondary-foreground)',
                      fontFamily: "'JetBrains Mono', monospace",
                      marginBottom: '12px',
                    }}
                  >
                    UI/UX Designer
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[
                      { val: '12', label: 'Projects' },
                      { val: '2+', label: 'Years' },
                      // { val: '98%', label: 'Satisfaction' },
                    ].map((s) => (
                      <div
                        key={s.label}
                        style={{
                          flex: 1,
                          textAlign: 'center',
                          background: 'rgba(124,92,252,0.1)',
                          borderRadius: '8px',
                          padding: '8px 4px',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            color: '#A78BFA',
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {s.val}
                        </div>
                        <div
                          style={{
                            fontSize: '10px',
                            color: 'var(--color-muted-foreground)',
                            fontFamily: "'JetBrains Mono', monospace",
                            letterSpacing: '0.05em',
                          }}
                        >
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating availability badge */}
              <div
                className="animate-float"
                style={{
                  position: 'absolute',
                  top: '-16px',
                  right: '-16px',
                  background: 'rgba(0,212,160,0.1)',
                  border: '1px solid rgba(0,212,160,0.3)',
                  borderRadius: '100px',
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#00D4A0',
                    boxShadow: '0 0 8px #00D4A0',
                  }}
                />
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#00D4A0',
                    fontFamily: "'DM Sans', sans-serif",
                    whiteSpace: 'nowrap',
                  }}
                >
                  Available for hire
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <Section
        style={{
          background: 'rgba(255,255,255,0.015)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container">
          <div ref={skillsRef}>
            <div className={`reveal ${skillsVisible ? 'visible' : ''}`} style={{ marginBottom: '56px' }}>
              <span className="section-label" style={{ display: 'inline-flex', marginBottom: '16px' }}>Skills & Expertise</span>
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
                Thoughtful{' '}
                <em
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  digital design
                </em>
              </h2>
            </div>
            <div
              className="grid-2col"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '48px',
              }}
            >
              {['Design'].map((category) => (
                <div key={category}>
                  <div
                    className={`reveal ${skillsVisible ? 'visible' : ''}`}
                    style={{ marginBottom: '28px' }}
                  >
                    <div
                      style={{
                        fontSize: '13px',
                        fontFamily: "'JetBrains Mono', monospace",
                        color: category === 'Development' ? '#7C5CFC' : '#00D4A0',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                      }}
                    >
                      {category}
                    </div>
                    <div
                      style={{
                        height: 1,
                        background: category === 'Development'
                          ? 'rgba(124,92,252,0.2)'
                          : 'rgba(0,212,160,0.2)',
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {skills
                      .filter((s) => s.category === category)
                      .map((skill, i) => (
                        <div
                          key={skill.name}
                          className={`reveal reveal-delay-${i + 1} ${skillsVisible ? 'visible' : ''}`}
                        >
                          <SkillBar skill={skill} visible={skillsVisible} />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Timeline ── */}
      <Section>
        <div className="container">
          <div ref={timelineRef}>
            <div className={`reveal ${timelineVisible ? 'visible' : ''}`} style={{ marginBottom: '56px' }}>
              {/* <span className="section-label" style={{ display: 'inline-flex', marginBottom: '16px' }}>Experience</span> */}
              <h2
                // style={{
                //   fontSize: 'clamp(26px, 3vw, 40px)',
                //   fontWeight: 700,
                //   fontFamily: "'DM Sans', sans-serif",
                //   color: 'var(--color-foreground)',
                //   letterSpacing: '-0.03em',
                //   marginTop: '16px',
                // }}
              >
                {/* Professional{' '} */}
                <em
                  style={{
                    fontSize: 'clamp(26px, 3vw, 40px)',
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  Focus
                </em>
              </h2>
            </div>
            <div style={{ position: 'relative' }}>
              {/* Vertical timeline line */}
              <div
                className="about-timeline-line"
                style={{
                  position: 'absolute',
                  left: '80px',
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background: 'linear-gradient(to bottom, rgba(124,92,252,0.4), rgba(0,212,160,0.2), transparent)',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`about-timeline-item reveal reveal-delay-${i + 1} ${timelineVisible ? 'visible' : ''}`}
                    style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}
                  >
                    {/* Year */}
                    <div
                      className="about-timeline-year"
                      style={{
                        width: '64px',
                        flexShrink: 0,
                        textAlign: 'right',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '13px',
                          color: item.color,
                          fontWeight: 500,
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                    {/* Dot */}
                    <div
                      className="about-timeline-dot-wrap"
                      style={{
                        width: 32,
                        flexShrink: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '4px',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          background: item.color,
                          boxShadow: `0 0 12px ${item.color}60`,
                          border: `2px solid ${item.color}`,
                        }}
                      />
                    </div>
                    {/* Content */}
                    <div
                      className="glass-card"
                      style={{
                        flex: 1,
                        borderRadius: '14px',
                        padding: '20px 24px',
                        marginBottom: '8px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '6px',
                          flexWrap: 'wrap',
                          gap: '8px',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            color: 'var(--color-foreground)',
                            fontFamily: "'DM Sans', sans-serif",
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {item.title}
                        </h3>
                        <span
                          style={{
                            fontSize: '12px',
                            color: 'var(--color-secondary-foreground)',
                            fontFamily: "'JetBrains Mono', monospace",
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {item.company}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: '14px',
                          color: 'var(--color-muted-foreground)',
                          lineHeight: '1.65',
                          marginBottom: '14px',
                        }}
                      >
                        {item.desc}
                      </p>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="tag-pill"
                            style={{
                              background: `${item.color}10`,
                              borderColor: `${item.color}25`,
                              color: item.color,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Values ── */}
      <Section
        style={{
          background: 'rgba(255,255,255,0.015)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container">
          <div ref={valuesRef}>
            <div className={`reveal ${valuesVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '56px' }}>
              <span className="section-label" style={{ display: 'inline-flex', marginBottom: '16px' }}>Values</span>
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
                What I value{' '}
                <em
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  about great work
                </em>
              </h2>
            </div>
            <div
              className="grid-2col"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
              }}
            >
              {values.map((v, i) => (
                <div
                  key={i}
                  className={`glass-card glass-card-hover reveal reveal-delay-${i + 1} ${valuesVisible ? 'visible' : ''}`}
                  style={{ borderRadius: '16px', padding: '28px' }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: `${v.color}15`,
                      border: `1px solid ${v.color}28`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      color: v.color,
                      marginBottom: '16px',
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--color-foreground)',
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '-0.01em',
                      marginBottom: '10px',
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted-foreground)', lineHeight: '1.7' }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="tight">
        <div className="container" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--color-secondary-foreground)',
              marginBottom: '28px',
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: 'italic',
            }}
          >
            "Let's build something people will actually love using."
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('contact')}>
              Start a Project
            </button>
            <button className="btn-secondary" onClick={() => navigate('experience')}>
              View Full Experience
            </button>
          </div>
        </div>
      </Section>
    </div>
  )
}
