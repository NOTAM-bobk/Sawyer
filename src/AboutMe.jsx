// AboutMe.jsx — placeholder page, content to be added later

export default function AboutMe({ onClose }) {
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
        justifyContent:  'center',
        fontFamily:      "'Space Grotesk', sans-serif",
        animation:       'slideUp 0.45s cubic-bezier(0.19,1,0.22,1) forwards',
      }}
    >
      {/* Close / back button */}
      <button
        onClick={onClose}
        style={{
          position:        'absolute',
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
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        back
      </button>

      {/* Placeholder content */}
      <p style={{ color: '#000', opacity: 0.35, fontSize: '0.9rem', fontWeight: 600 }}>
        content coming soon
      </p>
    </div>
  )
}
