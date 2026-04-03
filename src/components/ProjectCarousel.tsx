'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

const projects = [
  {
    title: 'Galliagh Kitchen Extension',
    location: 'Derry City',
    type: 'Residential Extension',
    image: 'https://images.unsplash.com/photo-1764526624453-db32c24eca55?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Waterside New Build',
    location: 'Waterside, Derry',
    type: 'New Build',
    image: 'https://images.unsplash.com/photo-1593786267440-550458cc882a?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Foyle Street Shopfit',
    location: 'City Centre, Derry',
    type: 'Commercial Fit-Out',
    image: 'https://images.unsplash.com/photo-1669799893305-44d9327d42ca?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Letterkenny Attic Conversion',
    location: 'Letterkenny, Donegal',
    type: 'Attic Conversion',
    image: 'https://images.unsplash.com/photo-1753460133435-bf41927f77f7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Creggan Road Development',
    location: 'Creggan, Derry',
    type: 'Residential Development',
    image: 'https://images.unsplash.com/photo-1710883727427-59d1ccc368fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Quayside Office Refurb',
    location: 'Ebrington, Derry',
    type: 'Commercial Refurb',
    image: 'https://images.unsplash.com/photo-1602230986242-b0e2b80e1ce5?auto=format&fit=crop&w=800&q=80',
  },
]

// Photo card for each project
function ProjectPlaceholder({ project, height }: { project: typeof projects[0]; height: number }) {
  return (
    <div style={{
      width: '100%',
      height: `${height}px`,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <img
        src={project.image}
        alt={project.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      {/* Dark overlay for text legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(26,26,46,0.15) 0%, rgba(26,26,46,0.6) 100%)',
      }} />

      {/* Diagonal slash accent */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '15%',
        width: '3px',
        height: '140%',
        background: `linear-gradient(180deg, transparent 0%, #f97316 40%, transparent 100%)`,
        opacity: 0.4,
        transform: 'rotate(20deg)',
      }} />

      {/* Bottom gradient overlay for text readability */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '55%',
        background: 'linear-gradient(transparent, rgba(13,13,26,0.95))',
      }} />

      {/* Project info */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '24px',
        right: '24px',
      }}>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#d4a017',
          display: 'block',
          marginBottom: '6px',
        }}>{project.type}</span>
        <h3 style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 900,
          fontSize: '20px',
          color: '#f5f0e8',
          textTransform: 'uppercase',
          letterSpacing: '0.01em',
          lineHeight: 1.1,
          marginBottom: '4px',
        }}>{project.title}</h3>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          color: 'rgba(245,240,232,0.6)',
          letterSpacing: '0.05em',
        }}>{project.location}</span>
      </div>
    </div>
  )
}

export default function ProjectCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const cardWidth = 400
  const cardGap = 16

  const updateScrollState = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setCanScrollLeft(track.scrollLeft > 0)
    setCanScrollRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 4)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
    return () => track.removeEventListener('scroll', updateScrollState)
  }, [updateScrollState])

  const scrollBy = (dir: 'left' | 'right') => {
    const track = trackRef.current
    if (!track) return
    const amount = cardWidth + cardGap
    track.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0))
    setScrollLeft(trackRef.current?.scrollLeft ?? 0)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - (trackRef.current.offsetLeft ?? 0)
    const walk = (x - startX) * 1.2
    trackRef.current.scrollLeft = scrollLeft - walk
  }
  const onMouseUp = () => setIsDragging(false)
  const onMouseLeave = () => setIsDragging(false)

  return (
    <section id="work" style={{ background: '#1a1a2e', padding: '100px 0', overflow: 'hidden' }}>
      {/* Header row */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        marginBottom: '48px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        <div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#d4a017',
            marginBottom: '12px',
          }}>Portfolio</p>
          <h2 style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(40px, 6vw, 72px)',
            color: '#f5f0e8',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
          }}>Our<br />Work</h2>
        </div>

        {/* Arrow controls */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => scrollBy('left')}
            disabled={!canScrollLeft}
            style={{
              width: '52px',
              height: '52px',
              background: canScrollLeft ? '#d4a017' : '#2a2a3a',
              border: 'none',
              cursor: canScrollLeft ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              fontSize: '20px',
              color: canScrollLeft ? '#1a1a2e' : '#4a4a5a',
            }}
            aria-label="Previous projects"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy('right')}
            disabled={!canScrollRight}
            style={{
              width: '52px',
              height: '52px',
              background: canScrollRight ? '#d4a017' : '#2a2a3a',
              border: 'none',
              cursor: canScrollRight ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              fontSize: '20px',
              color: canScrollRight ? '#1a1a2e' : '#4a4a5a',
            }}
            aria-label="Next projects"
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="carousel-track"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        style={{
          display: 'flex',
          gap: `${cardGap}px`,
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: '24px',
          paddingRight: '24px',
          userSelect: 'none',
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: `${cardWidth}px`,
              overflow: 'hidden',
            }}
          >
            <ProjectPlaceholder project={project} height={300} />
          </div>
        ))}
        {/* End padding */}
        <div style={{ flexShrink: 0, width: '1px' }} />
      </div>

      {/* Hide scrollbar */}
      <style>{`.carousel-track::-webkit-scrollbar { display: none; }`}</style>
    </section>
  )
}
