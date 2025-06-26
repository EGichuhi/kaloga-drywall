/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0d6164',
          50: '#e6f2f2',
          100: '#cce4e5',
          200: '#99c9cc',
          300: '#66adb2',
          400: '#339299',
          500: '#0d6164',
          600: '#0a5456',
          700: '#084749',
          800: '#063a3b',
          900: '#042d2e',
        },
        yellow: {
          DEFAULT: '#ffde59',
          50: '#fff9e6',
          100: '#fff3cc',
          200: '#ffe899',
          300: '#ffdd66',
          400: '#ffde59',
          500: '#ffd000',
          600: '#e6bb00',
          700: '#cca600',
          800: '#b38f00',
          900: '#997900',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};