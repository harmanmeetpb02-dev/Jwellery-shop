/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          black: '#0B0B0B',
          gold: '#D4AF37',
          'gold-dark': '#C5A85C',
          'gold-light': '#F3E5AB',
          ivory: '#FAF8F3',
          gray: '#2C2C2C',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', '"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        mega: '0.40em',
        ultra: '0.50em',
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      boxShadow: {
        'luxury': '0 10px 50px -12px rgba(212, 175, 55, 0.12)',
        'luxury-inner': 'inset 0 2px 20px 0 rgba(212, 175, 55, 0.05)',
      }
    },
  },
  plugins: [],
}
