/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        enchanted: {
          blush: '#F8DDE8',
          rose: '#E9A7C0',
          roseDark: '#D27F9F',
          lavender: '#DCD5F7',
          lavenderDark: '#AFA4E0',
          cream: '#FFF9F3',
          gold: '#D7B77A',
          goldLight: '#F3E5C8',
          plum: '#493348',
          plumLight: '#6B4F69',
          plumDark: '#2B1C2A',
          white: '#FFFFFF',
          petal: '#FCF3F8',
          mist: '#F2ECFB',
          twilight: '#3A2739'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        cursive: ['"Caveat"', '"Alex Brush"', '"Dancing Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'enchanted-sm': '0 4px 20px -2px rgba(233, 167, 192, 0.25)',
        'enchanted-md': '0 8px 30px -4px rgba(220, 213, 247, 0.35)',
        'enchanted-lg': '0 12px 40px -6px rgba(73, 51, 72, 0.15)',
        'enchanted-gold': '0 4px 25px -2px rgba(215, 183, 122, 0.35)',
        'glow': '0 0 25px rgba(233, 167, 192, 0.45)',
        'glow-gold': '0 0 25px rgba(215, 183, 122, 0.5)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
