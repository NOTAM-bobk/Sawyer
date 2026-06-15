// AboutMe.jsx — placeholder page, content to be added later
export default function AboutMe({ onClose }) {
  const projects = [
    { name: 'MovieDB', repo: 'https://github.com/NOTAM-bobk/MovieDB' },
    { name: 'NeoEmail', repo: 'https://github.com/NOTAM-bobk/NeoEmail' },
    { name: 'Promots.Optimzed', repo: 'https://github.com/NOTAM-bobk/Promots.Optimzed' },
    { name: 'Nimbus', repo: 'https://github.com/NOTAM-bobk/Nimbus.' },
    { name: 'Flux.Chat', repo: 'https://github.com/NOTAM-bobk/Flux.Chat' },
    { name: 'Sproti.30', repo: 'https://github.com/NOTAM-bobk/Sproti.30' },
    { name: 'URL-save', repo: 'https://github.com/NOTAM-bobk/URL-Save' },
    { name: 'Chinese-to-pinging', repo: 'https://github.com/NOTAM-bobk/Chinese-to-pingying' },
  ]

  const runningPBs = [
    { distance: '800m', time: '1:58.46' },
    { distance: '1500m', time: '4:23.06' },
    { distance: '1600m', time: '4:28.67' },
    { distance: '2 mile', time: '10:10' },
    { distance: '5k', time: '17:00' },
  ]

  // Generate raindrops with randomized position, delay, duration
  const raindrops = Array.from({ length: 40 }).map((_, i) => ({
    left:     Math.random() * 100,
    delay:    Math.random() * 5,
    duration: 0.7 + Math.random() * 0.8,
    height:   40 + Math.random() * 60,
    opacity:  0.08 + Math.random() * 0.12,
  }))

  // Minneapolis, MN coordinates for the embedded map
  const mapLat = 44.9778
  const mapLng = -93.2650
  const mapDelta = 0.08
  const mapBbox = `${mapLng - mapDelta}%2C${mapLat - mapDelta}%2C${mapLng + mapDelta}%2C${mapLat + mapDelta}`
  const mapEmbedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${mapBbox}&layer=mapnik&marker=${mapLat}%2C${mapLng}`
  const mapLinkSrc = `https://www.openstreetmap.org/?mlat=${mapLat}&mlon=${mapLng}#map=12/${mapLat}/${mapLng}`

  return (
    <div
      style={{
        position:        'fixed',
        inset:           0,
        zIndex:          200,
        background:      '#F4F1EA',
        display:         'flex',
        flexDirection:   'column',
        alignItems:      'center',
        fontFamily:      "'Space Grotesk', sans-serif",
        animation:       'slideUp 0.45s cubic-bezier(0.19,1,0.22,1) forwards',
        overflow:        'hidden',
      }}
    >
      {/* Keyframes for rain animation + responsive rules */}
      <style>
        {`
          @keyframes rainFall {
            0%   { transform: translateY(-10vh); }
            100% { transform: translateY(110vh); }
          }

          .aboutme-card-row {
            display: flex;
            gap: 14px;
            overflow-x: auto;
            padding-bottom: 16px;
            margin-bottom: 36px;
            -webkit-overflow-scrolling: touch;
          }

          .aboutme-contact-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 202;
            background: rgba(255,255,255,0.6);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-top: 2px solid #000;
            padding: 10px 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            font-size: 0.8rem;
            font-weight: 600;
            color: #000;
            flex-wrap: wrap;
            text-align: center;
          }

          .aboutme-contact-bar a {
            color: #000;
            text-decoration: none;
            border-bottom: 2px solid transparent;
            transition: border-color 0.15s ease;
          }

          .aboutme-contact-bar a:hover {
            border-color: #000;
          }

          @media (max-width: 640px) {
            .aboutme-content {
              padding: 0 16px !important;
            }

            .aboutme-section-title {
              font-size: 1.15rem !important;
            }

            .aboutme-card-row {
              gap: 10px !important;
              margin-bottom: 28px !important;
            }

            .aboutme-card-row > * {
              min-width: 140px !important;
            }

            .aboutme-summary {
              font-size: 0.92rem !important;
              padding: 18px !important;
            }

            .aboutme-contact-bar {
              gap: 8px !important;
              font-size: 0.7rem !important;
              padding: 8px 14px !important;
            }

            .aboutme-map-frame {
              height: 220px !important;
            }

            .aboutme-back-btn {
              top: 16px !important;
              left: 16px !important;
              padding: 5px 12px !important;
              font-size: 0.75rem !important;
            }

            .aboutme-scroll-area {
              padding-top: 72px !important;
              padding-bottom: 64px !important;
            }
          }
        `}
      </style>

      {/* Rain overlay */}
      <div
        style={{
          position:      'absolute',
          inset:         0,
          pointerEvents: 'none',
          zIndex:        1,
          overflow:      'hidden',
        }}
      >
        {raindrops.map((d, i) => (
          <div
            key={i}
            style={{
              position:   'absolute',
              top:         0,
              left:        `${d.left}%`,
              width:       '1px',
              height:      `${d.height}px`,
              background:  `linear-gradient(to bottom, rgba(60,90,120,0), rgba(60,90,120,${d.opacity}))`,
              animation:   `rainFall ${d.duration}s linear ${d.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Scrollable content area */}
      <div
        className="aboutme-scroll-area"
        style={{
          position:        'relative',
          zIndex:          2,
          width:           '100%',
          height:          '100%',
          overflowY:       'auto',
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          paddingTop:      '90px',
          paddingBottom:   '70px',
          boxSizing:       'border-box',
        }}
      >
        {/* Close / back button */}
        <button
          onClick={onClose}
          className="aboutme-back-btn"
          style={{
            position:        'fixed',
            top:             '24px',
            left:            '24px',
            display:         'flex',
            alignItems:      'center',
            gap:             '6px',
            background:      'rgba(255,255,255,0.35)',
            backdropFilter:  'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border:          '2px solid #000',
            borderRadius:    '999px',
            padding:         '6px 16px',
            fontFamily:      "'Space Grotesk', sans-serif",
            fontWeight:      700,
            fontSize:        '0.8rem',
            cursor:          'pointer',
            boxShadow:       '3px 3px 0px #000',
            zIndex:          201,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          back
        </button>

        {/* Content wrapper */}
        <div className="aboutme-content" style={{ width: '100%', maxWidth: '900px', padding: '0 24px', boxSizing: 'border-box' }}>

          {/* Summary Section */}
          <div
            className="aboutme-summary"
            style={{
              background:      '#FFFFFF',
              border:          '2px solid #000',
              borderRadius:    '14px',
              padding:         '24px',
              boxShadow:       '3px 3px 0px #000',
              marginBottom:    '36px',
              fontSize:        '1rem',
              lineHeight:      1.6,
              fontWeight:      500,
            }}
          >
            {/* TODO: replace with your own summary */}
            Hi, I'm Sawyer — a developer and runner based in Minneapolis, MN. I build small tools and apps,
            and I'm always working on something new. Take a look at my projects, PBs, and resume below,
            or reach out using the links at the bottom of the page.
          </div>

          {/* Projects Section */}
          <h2
            className="aboutme-section-title"
            style={{
              fontSize:    '1.4rem',
              fontWeight:  800,
              margin:      '0 0 14px 0',
              color:       '#000',
            }}
          >
            Projects:
          </h2>
          <div className="aboutme-card-row">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex:            '0 0 auto',
                  minWidth:        '160px',
                  background:      '#FFFFFF',
                  border:          '2px solid #000',
                  borderRadius:    '14px',
                  padding:         '16px',
                  boxShadow:       '3px 3px 0px #000',
                  textDecoration:  'none',
                  color:           '#000',
                  display:         'flex',
                  flexDirection:   'column',
                  justifyContent:  'space-between',
                  gap:             '10px',
                  cursor:          'pointer',
                }}
              >
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  {p.name}
                </span>
                <span
                  style={{
                    display:     'flex',
                    alignItems:  'center',
                    gap:         '6px',
                    fontSize:    '0.75rem',
                    fontWeight:  600,
                    opacity:     0.6,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.41-1.31.74-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub Repo
                </span>
              </a>
            ))}
          </div>

          {/* Running PBs Section */}
          <h2
            className="aboutme-section-title"
            style={{
              fontSize:    '1.4rem',
              fontWeight:  800,
              margin:      '0 0 14px 0',
              color:       '#000',
            }}
          >
            Running PBs:
          </h2>
          <div className="aboutme-card-row">
            {runningPBs.map((pb, i) => (
              <div
                key={i}
                style={{
                  flex:            '0 0 auto',
                  minWidth:        '120px',
                  background:      '#FFFFFF',
                  border:          '2px solid #000',
                  borderRadius:    '14px',
                  padding:         '16px',
                  boxShadow:       '3px 3px 0px #000',
                  display:         'flex',
                  flexDirection:   'column',
                  gap:             '8px',
                }}
              >
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  {pb.distance}
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>
                  {pb.time}
                </span>
              </div>
            ))}
          </div>

          {/* Location Section */}
          <h2
            className="aboutme-section-title"
            style={{
              fontSize:    '1.4rem',
              fontWeight:  800,
              margin:      '0 0 14px 0',
              color:       '#000',
            }}
          >
            Location:
          </h2>
          <div
            style={{
              background:      '#FFFFFF',
              border:          '2px solid #000',
              borderRadius:    '14px',
              padding:         '10px',
              boxShadow:       '3px 3px 0px #000',
              marginBottom:    '36px',
              overflow:        'hidden',
            }}
          >
            <iframe
              className="aboutme-map-frame"
              title="Map showing Minneapolis, MN"
              src={mapEmbedSrc}
              style={{
                width:        '100%',
                height:       '300px',
                border:       '2px solid #000',
                borderRadius: '10px',
                display:      'block',
              }}
              loading="lazy"
            />
            <div style={{ marginTop: '10px', fontSize: '0.8rem', fontWeight: 600 }}>
              <a
                href={mapLinkSrc}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#000', textDecoration: 'underline' }}
              >
                View larger map — Minneapolis, MN
              </a>
            </div>
          </div>

          {/* Resume Section */}
          <h2
            className="aboutme-section-title"
            style={{
              fontSize:    '1.4rem',
              fontWeight:  800,
              margin:      '0 0 14px 0',
              color:       '#000',
            }}
          >
            Resume:
          </h2>
          <div
            style={{
              background:      '#FFFFFF',
              border:          '2px solid #000',
              borderRadius:    '14px',
              padding:         '24px',
              boxShadow:       '3px 3px 0px #000',
              display:         'flex',
              flexDirection:   'column',
              alignItems:      'flex-start',
              gap:             '12px',
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '1rem' }}>
              Sawyer Schulz — Resume
            </span>
            <a
              href="/SawyerSchulz_Resume.docx"
              download
              style={{
                display:         'inline-flex',
                alignItems:      'center',
                gap:             '8px',
                background:      '#F4F1EA',
                border:          '2px solid #000',
                borderRadius:    '999px',
                padding:         '8px 18px',
                fontWeight:      700,
                fontSize:        '0.85rem',
                color:           '#000',
                textDecoration:  'none',
                boxShadow:       '3px 3px 0px #000',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12"/>
                <polyline points="7 11 12 16 17 11"/>
                <line x1="5" y1="21" x2="19" y2="21"/>
              </svg>
              Download Resume
            </a>
          </div>

        </div>
      </div>

      {/* Sticky contact bar */}
      <div className="aboutme-contact-bar">
        <a href="mailto:sawyer11456@gmail.com">sawyer11456@gmail.com</a>
        <span style={{ opacity: 0.4 }}>|</span>
        <a href="tel:+16124443853">612 444 3853</a>
      </div>
    </div>
  )
}
