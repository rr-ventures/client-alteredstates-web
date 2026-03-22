/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dcc8',
          300: '#d9c4a5',
          400: '#c9a97e',
          500: '#b8905c',
          600: '#a57a4c',
          700: '#8a6340',
          800: '#71513a',
          900: '#5d4433',
          950: '#332419',
        },
        sand: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f2ebe0',
          300: '#e8dcc8',
          400: '#d9c4a5',
          500: '#c9a97e',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a2b0a2',
          400: '#7a8f7a',
          500: '#5f7460',
          600: '#4a5d4c',
          700: '#3d4b3f',
          800: '#333e34',
          900: '#2c342d',
        },
        warm: {
          50: '#fefdfb',
          100: '#fcf9f4',
          200: '#f8f2e8',
          300: '#f2e8d8',
          400: '#e8d8c0',
          500: '#dcc4a0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
