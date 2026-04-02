'use client'

import { useState, useEffect } from 'react'

function QuoteModal({ onClose }: { onClose: () => void }) {
  const [demoClicked, setDemoClicked] = useState(false)

  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      onClick={handleBackdrop}
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'rgba(10,10,20,0.85)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div style={{
        background: '#12122a',
        border: '1px solid rgba(212,160,23,0.35)',
        maxWidth: '520px', width: '100%',
        padding: '48px 40px 40px',
        position: 'relative',
        boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}>
        {/* Gold top accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#d4a017' }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#f5f0e8', opacity: 0.5, fontSize: '22px', lineHeight: 1, padding: '4px 8px',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
        >✕</button>

        {/* Header */}
        <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#d4a017', marginBottom: '8px' }}>
          McCloskey & Sons
        </p>
        <h2 style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 900, fontSize: '28px', color: '#f5f0e8', marginBottom: '4px', letterSpacing: '-0.01em' }}>
          Request a Quote
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(245,240,232,0.5)', marginBottom: '32px' }}>
          Tell us about your project and we'll be in touch.
        </p>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { label: 'Full Name', placeholder: 'e.g. John Doherty', type: 'text' },
            { label: 'Phone Number', placeholder: 'e.g. 028 7136 0000', type: 'tel' },
            { label: 'Email Address', placeholder: 'e.g. john@example.com', type: 'email' },
          ].map(field => (
            <div key={field.label}>
              <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.6)', marginBottom: '6px' }}>
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(212,160,23,0.2)',
                  color: '#f5f0e8',
                  fontFamily: "'Inter', sans-serif", fontSize: '14px',
                  padding: '12px 14px',
                  outline: 'none',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,160,23,0.6)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(212,160,23,0.2)')}
              />
            </div>
          ))}

          <div>
            <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.6)', marginBottom: '6px' }}>
              Project Type
            </label>
            <select style={{
              width: '100%', boxSizing: 'border-box',
              background: '#12122a',
              border: '1px solid rgba(212,160,23,0.2)',
              color: '#f5f0e8',
              fontFamily: "'Inter', sans-serif", fontSize: '14px',
              padding: '12px 14px',
              outline: 'none', appearance: 'none', cursor: 'pointer',
            }}>
              <option value="">Select a project type…</option>
              <option>Home Extension</option>
              <option>New Build</option>
              <option>Renovation / Refurbishment</option>
              <option>Commercial Fit-out</option>
              <option>Attic Conversion</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.6)', marginBottom: '6px' }}>
              Brief Description
            </label>
            <textarea
              placeholder="Briefly describe your project…"
              rows={3}
              style={{
                width: '100%', boxSizing: 'border-box', resize: 'vertical',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(212,160,23,0.2)',
                color: '#f5f0e8',
                fontFamily: "'Inter', sans-serif", fontSize: '14px',
                padding: '12px 14px',
                outline: 'none',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,160,23,0.6)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(212,160,23,0.2)')}
            />
          </div>

          {/* Submit button — greyed out demo */}
          <button
            onClick={() => setDemoClicked(true)}
            style={{
              marginTop: '8px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(245,240,232,0.35)',
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900, fontSize: '13px',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '14px 24px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Submit Request
          </button>

          {demoClicked && (
            <p style={{
              textAlign: 'center',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#d4a017',
              letterSpacing: '0.05em',
              marginTop: '4px',
            }}>
              This is a Demo Site
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Fixed Nav */}
      <nav
        style={{
          position: 'fixed',
          top: '40px',
          left: 0,
          right: 0,
          zIndex: 1000,
          paddingTop: '0px',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled ? 'rgba(26,26,46,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,160,23,0.2)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: '18px',
                color: '#d4a017',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>McCloskey & Sons</span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '10px',
                color: '#f5f0e8',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                opacity: 0.7,
              }}>Building Contractors</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 700,
                  fontSize: '13px',
                  color: '#f5f0e8',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#d4a017')}
                onMouseLeave={e => (e.currentTarget.style.color = '#f5f0e8')}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setQuoteOpen(true)}
              style={{
                background: '#d4a017',
                color: '#1a1a2e',
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#f0b820')}
              onMouseLeave={e => (e.currentTarget.style.background = '#d4a017')}
            >
              Get a Quote
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              zIndex: 1001,
            }}
            aria-label="Toggle menu"
            className="hamburger-btn"
          >
            <span style={{
              display: 'block',
              width: '28px',
              height: '2px',
              background: menuOpen ? '#d4a017' : '#f5f0e8',
              transition: 'transform 0.3s, opacity 0.3s, background 0.3s',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '28px',
              height: '2px',
              background: menuOpen ? '#d4a017' : '#f5f0e8',
              transition: 'opacity 0.3s, background 0.3s',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              width: '28px',
              height: '2px',
              background: menuOpen ? '#d4a017' : '#f5f0e8',
              transition: 'transform 0.3s, background 0.3s',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          background: '#0d0d1a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px 48px',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'none' : 'translateY(-20px)',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      >
        {/* Menu items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(40px, 8vw, 80px)',
                color: '#f5f0e8',
                textDecoration: 'none',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
                transitionDelay: menuOpen ? `${i * 0.05}s` : '0s',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'none' : 'translateY(20px)',
                display: 'block',
                borderBottom: '1px solid rgba(245,240,232,0.08)',
                paddingBottom: '12px',
                paddingTop: '12px',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#d4a017')}
              onMouseLeave={e => (e.currentTarget.style.color = '#f5f0e8')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact info in menu */}
        <div style={{ marginTop: '48px', borderTop: '1px solid rgba(212,160,23,0.3)', paddingTop: '32px', width: '100%' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#d4a017', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Get in touch</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#f5f0e8' }}>+44 28 7136 0000</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#f5f0e8' }}>info@mccloskeysons.co.uk</p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </>
  )
}
