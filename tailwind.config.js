/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          900: '#1a365d', // Primary dark blue
          800: '#2a4a73',
          700: '#3a5f8a',
          600: '#4b74a0',
          500: '#5b89b7',
          400: '#6c9ecf',
          300: '#7cb3e6',
          200: '#8dc8fe',
          100: '#e0f0ff',
          50: '#f0f8ff',
        },
        yellow: {
          500: '#e2b13c', // Gold accent
          400: '#f0c13c',
          300: '#ffd13c',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#1a365d',
              '&:hover': {
                color: '#2a4a73',
              },
            },
            h1: {
              color: '#1a365d',
            },
            h2: {
              color: '#1a365d',
            },
            h3: {
              color: '#1a365d',
            },
          },
        },
      },
    },
  },
  plugins: [],
};