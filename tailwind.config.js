/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne:    ['Syne', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'brutal-sm':    '4px 4px 0px 0px #000000',
        'brutal-hover': '2px 2px 0px 0px #000000',
      },
      keyframes: {
        blob: {
          '0%':   { transform: 'translate(0px,0px) scale(1)' },
          '33%':  { transform: 'translate(30px,-40px) scale(1.08)' },
          '66%':  { transform: 'translate(-20px,20px) scale(0.95)' },
          '100%': { transform: 'translate(0px,0px) scale(1)' },
        },
        liquidFlyIn: {
          '0%':   { transform: 'translateY(220px) scale(0.2) rotate(-20deg)', filter: 'blur(40px)', opacity: '0', letterSpacing: '-0.6em' },
          '50%':  { transform: 'translateY(-30px) scale(1.15) rotate(8deg)',  filter: 'blur(18px)', opacity: '0.95', letterSpacing: '0.08em' },
          '75%':  { transform: 'translateY(15px) scale(0.92) rotate(-4deg)',  filter: 'blur(10px)', opacity: '1',  letterSpacing: '-0.04em' },
          '100%': { transform: 'translateY(0) scale(1) rotate(0deg)',          filter: 'blur(0px)', opacity: '1',  letterSpacing: '-0.02em' },
        },
      },
      animation: {
        blob:           'blob 7s infinite',
        liquidEntrance: 'liquidFlyIn 2.4s cubic-bezier(0.19,1,0.22,1) forwards',
      },
    },
  },
  plugins: [],
}
