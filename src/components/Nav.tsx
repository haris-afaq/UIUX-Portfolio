import { useState, useEffect } from 'react'
import type { Page, NavigateFn } from '../App'

interface NavProps {
  currentPage: Page
  navigate: NavigateFn
  darkMode: boolean
  toggleDark: () => void
}

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Work', page: 'work' },
  { label: 'UI/UX', page: 'uiux' },
  { label: 'Experience', page: 'experience' },
  { label: 'Contact', page: 'contact' },
]

export default function Nav({ currentPage, navigate, darkMode, toggleDark }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (page: Page) => currentPage === page || (currentPage === 'casestudy' && page === 'work')

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 max(16px, calc((100vw - 1200px) / 2 + 32px))',
          background: scrolled
            ? 'rgba(8, 9, 15, 0.92)'
            : 'rgba(8, 9, 15, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          {/* <div
            style={{
              width: 34,
              height: 34,
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #7C5CFC 0%, #00D4A0 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          > */}
            {/* <span
              style={{
                color: 'white',
                fontWeight: 700,
                fontSize: '15px',
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
              }}
            >
              HA
            </span> */}
          {/* </div> */}
          <div>
            <span
              style={{
                color: 'var(--color-foreground)',
                fontWeight: 600,
                fontSize: '15px',
                fontFamily: "'DM Sans', sans-serif",
                display: 'block',
                lineHeight: '1',
              }}
            >
              Maryam Tauheed
            </span>
            <span
              style={{
                color: 'var(--color-muted-foreground)',
                fontSize: '11px',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.05em',
                display: 'block',
                marginTop: '2px',
              }}
            >
              UI/UX PORTFOLIO
            </span>
          </div>
        </button>

        {/* Desktop nav links */}
        <div
          className="nav-hidden-mobile"
          style={{ alignItems: 'center', gap: '2px' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => navigate(link.page)}
              style={{
                padding: '7px 14px',
                borderRadius: '8px',
                background: isActive(link.page)
                  ? 'rgba(124, 92, 252, 0.12)'
                  : 'transparent',
                border: isActive(link.page)
                  ? '1px solid rgba(124, 92, 252, 0.25)'
                  : '1px solid transparent',
                color: isActive(link.page) ? '#A78BFA' : 'var(--color-secondary-foreground)',
                fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.page)) {
                  ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--color-foreground)'
                  ;(e.currentTarget as HTMLButtonElement).style.background =
                    'rgba(255,255,255,0.05)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.page)) {
                  ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--color-secondary-foreground)'
                  ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                }
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={toggleDark}
            style={{
              width: 36,
              height: 36,
              borderRadius: '8px',
              background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(10,11,18,0.04)',
              border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(10,11,18,0.14)',
              color: 'var(--color-secondary-foreground)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '15px',
              transition: 'all 0.2s ease',
            }}
            title="Toggle theme"
          >
            {darkMode ? '○' : '●'}
          </button>

          <button
            onClick={() => navigate('contact')}
            className="nav-hidden-mobile btn-primary"
            style={{ padding: '8px 18px', fontSize: '13px', borderRadius: '8px' }}
          >
            Hire Me
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile-only"
            style={{
              width: 36,
              height: 36,
              borderRadius: '8px',
              background: mobileOpen
                ? 'rgba(124,92,252,0.15)'
                : darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(10,11,18,0.04)',
              border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(10,11,18,0.14)',
              color: 'var(--color-secondary-foreground)',
              cursor: 'pointer',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                width: 16,
                height: 1.5,
                background: mobileOpen ? '#A78BFA' : 'var(--color-secondary-foreground)',
                display: 'block',
                transition: 'all 0.25s ease',
                transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
                borderRadius: '1px',
              }}
            />
            <span
              style={{
                width: 16,
                height: 1.5,
                background: mobileOpen ? '#A78BFA' : 'var(--color-secondary-foreground)',
                display: 'block',
                opacity: mobileOpen ? 0 : 1,
                transition: 'opacity 0.2s ease',
                borderRadius: '1px',
              }}
            />
            <span
              style={{
                width: 16,
                height: 1.5,
                background: mobileOpen ? '#A78BFA' : 'var(--color-secondary-foreground)',
                display: 'block',
                transition: 'all 0.25s ease',
                transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
                borderRadius: '1px',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            zIndex: 99,
            background: darkMode ? 'rgba(8, 9, 15, 0.98)' : 'rgba(250, 250, 250, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderBottom: darkMode ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(10,11,18,0.1)',
            padding: '16px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => {
                navigate(link.page)
                setMobileOpen(false)
              }}
              style={{
                padding: '13px 16px',
                borderRadius: '10px',
                background: isActive(link.page)
                  ? 'rgba(124, 92, 252, 0.12)'
                  : 'transparent',
                border: 'none',
                color: isActive(link.page) ? '#A78BFA' : 'var(--color-secondary-foreground)',
                fontSize: '15px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s ease',
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <button
              onClick={() => { navigate('contact'); setMobileOpen(false) }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </>
  )
}
