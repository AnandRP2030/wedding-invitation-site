/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F0E8',
          200: '#EDE4D4',
          300: '#DFD2BC',
          900: '#26221D',
        },
        sunshine: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        botanical: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          700: '#15803D',
          800: '#166534',
          900: '#0F3D2E',
          950: '#062319',
        },
        gold: {
          300: '#F5DF9E',
          400: '#E6C66E',
          500: '#D4AF37',
          600: '#B8860B',
        },
        charcoal: {
          800: '#1E242B',
          900: '#111820',
          950: '#0A0E13',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}

