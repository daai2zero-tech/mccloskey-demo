'use client'

import { useEffect, useRef, useState } from 'react'
import Nav from '@/components/Nav'
import Services from '@/components/Services'
import ProjectCarousel from '@/components/ProjectCarousel'

// ─── Demo Banner ───────────────────────────────────────────────────────────────
function DemoBanner() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: '#d4a017',
      color: '#1a1a2e',
      textAlign: 'center',
      padding: '8px',
      fontSize: '13px',
      fontWeight: 700,
      letterSpacing: '0.05em',
    }}>
      DEMO SITE — Built by Derry Digital | derrydigital.co.uk
    </div>
  )
}

// ─── Hero Section ──────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: '#1a1a2e',
      paddingTop: '104px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Full-bleed background photo */}
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center right',
          display: 'block',
        }}
      />

      {/* Gradient: solid navy left → transparent right, photo shows through on right */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, #1a1a2e 0%, #1a1a2e 42%, rgba(26,26,46,0.85) 60%, rgba(26,26,46,0.35) 100%)',
      }} />

      {/* Subtle dark vignette top & bottom */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(26,26,46,0.5) 0%, transparent 20%, transparent 75%, rgba(26,26,46,0.7) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '80px 24px',
        width: '100%',
      }}>
        {/* Pre-heading */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#d4a017',
          marginBottom: '28px',
        }}>Derry / North West Ireland · Est. 1987</p>

        {/* Massive stacked heading */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(72px, 11vw, 140px)',
            color: '#f5f0e8',
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            display: 'block',
          }}>
            McCLOSKEY
          </div>
          <div style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(54px, 8.5vw, 108px)',
            color: '#d4a017',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            display: 'block',
          }}>
            &amp; SONS
          </div>
          <div style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(72px, 11vw, 140px)',
            color: '#f5f0e8',
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            display: 'block',
          }}>
            BUILDERS
          </div>
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 700,
          fontSize: '18px',
          color: '#d4a017',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          Building the North West Since 1987
        </p>

        {/* Subtext */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '16px',
          color: 'rgba(245,240,232,0.65)',
          lineHeight: 1.7,
          marginBottom: '48px',
          maxWidth: '480px',
        }}>
          Extensions, new builds, renovations and commercial fit-outs across Derry, Donegal and the wider North West — delivered by a family team that takes pride in every brick.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              background: '#d4a017',
              color: '#1a1a2e',
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '18px 40px',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#f0b820'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#d4a017'; e.currentTarget.style.transform = 'none'; }}
          >
            Get a Free Quote
          </a>
          <a
            href="#work"
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: '#f5f0e8',
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '18px 40px',
              textDecoration: 'none',
              border: '1px solid rgba(245,240,232,0.25)',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4a017'; e.currentTarget.style.color = '#d4a017'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.25)'; e.currentTarget.style.color = '#f5f0e8'; }}
          >
            View Our Work
          </a>
        </div>

        {/* Stats row */}
        <div className="stats-grid-mc">
          {[
            { value: '36', label: 'Years Trading' },
            { value: '500+', label: 'Projects Completed' },
            { value: '12', label: 'Crew Members' },
            { value: 'NHBC', label: 'Registered' },
          ].map(stat => (
            <div key={stat.label} className="stat-item-mc">
              <div style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: '36px',
                color: '#d4a017',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}>{stat.value}</div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                color: 'rgba(245,240,232,0.45)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────────
const statsData = [
  { value: 36, suffix: '', label: 'Years Trading' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 12, suffix: '', label: 'Crew Members' },
  { value: 100, suffix: '%', label: 'NHBC Registered' },
]

function AnimatedStat({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!active || hasAnimated.current) return
    hasAnimated.current = true
    const duration = 1500
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, value])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 24px',
      borderRight: '1px solid rgba(26,26,46,0.2)',
      flex: 1,
    }}>
      <div style={{
        fontFamily: "'Inter Tight', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(40px, 5vw, 64px)',
        color: '#1a1a2e',
        lineHeight: 1,
        letterSpacing: '-0.02em',
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: '12px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(26,26,46,0.7)',
        marginTop: '8px',
      }}>
        {label}
      </div>
    </div>
  )
}

function StatsBar() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{
      background: '#d4a017',
      width: '100%',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {statsData.map((stat, i) => (
          <AnimatedStat key={i} {...stat} active={active} />
        ))}
      </div>
    </div>
  )
}

// ─── Testimonial ───────────────────────────────────────────────────────────────
function Testimonial() {
  return (
    <section id="testimonials" className="section-pad" style={{ background: '#1a1a2e', textAlign: 'center' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        {/* Decorative quote mark */}
        <div style={{
          fontFamily: 'Georgia, serif',
          fontSize: '160px',
          lineHeight: 0.7,
          color: '#d4a017',
          opacity: 0.9,
          marginBottom: '24px',
          display: 'block',
          userSelect: 'none',
        }}>
          &ldquo;
        </div>

        <blockquote style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(22px, 3.5vw, 36px)',
          color: '#f5f0e8',
          lineHeight: 1.35,
          letterSpacing: '-0.01em',
          marginBottom: '48px',
          fontStyle: 'italic',
        }}>
          McCloskey &amp; Sons built our kitchen extension from scratch — on time, on budget, no drama. Padraig and the boys are the real deal. You won&apos;t find a more professional outfit in the North West.
        </blockquote>

        {/* Client info */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <div style={{
            width: '48px',
            height: '2px',
            background: '#d4a017',
            marginBottom: '12px',
          }} />
          <span style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 900,
            fontSize: '16px',
            color: '#d4a017',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Seamus &amp; Orla McLaughlin
          </span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: '#7a7a8a',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Kitchen Extension — Strathfoyle, Derry
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── About/CTA Band ────────────────────────────────────────────────────────────
function CTABand() {
  return (
    <section style={{
      background: '#d4a017',
      padding: '80px 24px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(26,26,46,0.6)',
          marginBottom: '16px',
        }}>No obligation · Fast response</p>
        <h2 style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(36px, 6vw, 72px)',
          color: '#1a1a2e',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          lineHeight: 0.95,
          marginBottom: '24px',
        }}>
          Ready to Start<br />Your Project?
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '16px',
          color: 'rgba(26,26,46,0.75)',
          lineHeight: 1.6,
          marginBottom: '48px',
          maxWidth: '500px',
          margin: '0 auto 48px',
        }}>
          Get in touch for a free, no-obligation site visit and quote. We cover Derry, Donegal and the wider North West.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              background: '#1a1a2e',
              color: '#f5f0e8',
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '18px 48px',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2a2a3e'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1a1a2e'; e.currentTarget.style.transform = 'none'; }}
          >
            Request a Free Quote
          </a>
          <a
            href="tel:+442871360000"
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: '#1a1a2e',
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '18px 48px',
              textDecoration: 'none',
              border: '2px solid #1a1a2e',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1a1a2e'; e.currentTarget.style.color = '#f5f0e8'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a1a2e'; }}
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const accreditations = [
    { label: 'NHBC', subtext: 'New Home Warranty' },
    { label: 'FMB', subtext: 'Federation of Master Builders' },
    { label: 'Master\nBuilders', subtext: 'Certified Member' },
  ]

  const quickLinks = [
    'Extensions & Renovations',
    'New Builds',
    'Commercial Fit-Outs',
    'Our Work',
    'About Us',
    'Contact',
  ]

  return (
    <footer id="contact" style={{ background: '#0d0d1a' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '80px 24px 48px',
      }}>
        <div className="footer-grid-mc" style={{ marginBottom: '64px' }}>
          {/* Col 1 — Contact */}
          <div>
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: '20px',
                color: '#d4a017',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}>McCloskey & Sons</div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                color: '#7a7a8a',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>Building Contractors</div>
            </div>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              color: '#7a7a8a',
              lineHeight: 1.7,
              marginBottom: '24px',
            }}>
              Family-run builders serving Derry, Donegal and the North West of Ireland since 1987.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <p style={{ fontSize: '11px', color: '#d4a017', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px', fontFamily: "'Inter', sans-serif" }}>Address</p>
                <p style={{ fontSize: '14px', color: '#f5f0e8', fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                  14 Racecourse Road<br />
                  Derry / Londonderry<br />
                  BT48 7RE
                </p>
              </div>
              <div>
                <p style={{ fontSize: '11px', color: '#d4a017', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px', fontFamily: "'Inter', sans-serif" }}>Phone</p>
                <a href="tel:+442871360000" style={{ fontSize: '14px', color: '#f5f0e8', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}>+44 28 7136 0000</a>
              </div>
              <div>
                <p style={{ fontSize: '11px', color: '#d4a017', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px', fontFamily: "'Inter', sans-serif" }}>Email</p>
                <a href="mailto:info@mccloskeysons.co.uk" style={{ fontSize: '14px', color: '#f5f0e8', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}>info@mccloskeysons.co.uk</a>
              </div>
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <p style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#f5f0e8',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(245,240,232,0.1)',
            }}>Quick Links</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      color: '#7a7a8a',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#d4a017')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#7a7a8a')}
                  >
                    <span style={{ color: '#d4a017', fontSize: '10px' }}>▸</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Accreditations */}
          <div>
            <p style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#f5f0e8',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(245,240,232,0.1)',
            }}>Accreditations</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {accreditations.map(acc => (
                <div
                  key={acc.label}
                  style={{
                    background: '#1a1a2e',
                    border: '1px solid rgba(212,160,23,0.2)',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  {/* Placeholder logo square */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    flexShrink: 0,
                    background: '#2a2a3a',
                    border: '1px solid rgba(212,160,23,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontWeight: 900,
                      fontSize: '10px',
                      color: '#d4a017',
                      textAlign: 'center',
                      letterSpacing: '0.05em',
                      lineHeight: 1.2,
                      whiteSpace: 'pre-line',
                    }}>{acc.label}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: '13px', color: '#f5f0e8' }}>{acc.label.replace('\n', ' ')}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#7a7a8a', marginTop: '2px' }}>{acc.subtext}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="footer-bottom-mc" style={{
          borderTop: '1px solid rgba(245,240,232,0.08)',
          paddingTop: '24px',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: '#4a4a5a',
          }}>
            © {new Date().getFullYear()} McCloskey &amp; Sons Building Contractors. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: '#4a4a5a',
          }}>
            Demo site by{' '}
            <a href="https://derrydigital.co.uk" style={{ color: '#d4a017', textDecoration: 'none' }}>
              Derry Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <DemoBanner />
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <ProjectCarousel />
        <Testimonial />
        <CTABand />
        <Footer />
      </main>
    </>
  )
}
