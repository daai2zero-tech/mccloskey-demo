'use client'

import { useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Extensions & Renovations',
    description: 'Kitchen extensions, attic conversions, sunrooms and full property renovations. We transform existing homes across Derry and the wider North West, adding space and value where it matters most.',
    tags: ['Kitchen Extensions', 'Attic Conversions', 'Side Returns', 'Full Refurb'],
  },
  {
    number: '02',
    title: 'New Builds',
    description: 'From single-dwelling new builds to small residential developments, we manage the full project lifecycle — foundations to finish. Based in Derry, operating across Donegal and the North West.',
    tags: ['Residential Builds', 'Foundations to Fit-Out', 'Project Management', 'NHBC Registered'],
  },
  {
    number: '03',
    title: 'Commercial Fit-Outs',
    description: 'Retail shopfitting, office fit-outs and commercial refurbishments. We work with businesses throughout Derry/Londonderry to deliver quality commercial spaces on time and on budget.',
    tags: ['Shopfitting', 'Office Fit-Out', 'Retail', 'Restaurant & Hospitality'],
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" style={{ background: '#1a1a2e', padding: '100px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section header */}
        <div style={{ marginBottom: '64px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#d4a017',
              marginBottom: '12px',
            }}>What We Do</p>
            <h2 style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(40px, 6vw, 72px)',
              color: '#f5f0e8',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}>Our<br />Services</h2>
          </div>
          <p style={{
            maxWidth: '420px',
            fontSize: '15px',
            color: '#4a4a5a',
            lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif",
          }}>
            Family-run since 1987. We build extensions, new homes and commercial spaces across Derry, Donegal and the North West. Every project gets the same hands-on attention — from the first site visit to the final snag.
          </p>
        </div>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2px',
        }}>
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index
            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: '#0d0d1a',
                  padding: '48px 40px',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                  overflow: 'hidden',
                }}
              >
                {/* Left border — expands on hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: isHovered ? '6px' : '4px',
                  background: '#d4a017',
                  transition: 'width 0.3s ease',
                }} />

                {/* Hover bg fill — subtle amber wash */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(212,160,23,0.03)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none',
                }} />

                {/* Card number */}
                <div style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 900,
                  fontSize: '48px',
                  color: '#d4a017',
                  lineHeight: 1,
                  marginBottom: '24px',
                  opacity: 0.9,
                }}>
                  {service.number}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 900,
                  fontSize: '24px',
                  color: '#f5f0e8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  marginBottom: '16px',
                  lineHeight: 1.1,
                }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: '#7a7a8a',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}>
                  {service.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {service.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#d4a017',
                      background: 'rgba(212,160,23,0.1)',
                      padding: '4px 10px',
                      border: '1px solid rgba(212,160,23,0.2)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow link */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#d4a017',
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  <span>Find Out More</span>
                  <span style={{
                    display: 'inline-block',
                    transition: 'transform 0.2s ease',
                    transform: isHovered ? 'translateX(6px)' : 'none',
                    fontSize: '18px',
                  }}>→</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
