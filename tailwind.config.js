

/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import indielayer from '@indielayer/ui/tailwind.preset'

export default {
  darkMode: 'class',
  // load indielayer ui presets
  presets: [indielayer()],
  // allow PurgeCSS to analyze components
  content: [
    './index.html',
    './**/*.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/@indielayer/ui/**/*',
    'node_modules/@indielayer/ui/{lib,src}/**/*',
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d83bc',
          50: 'rgb(242,245,249)',
          100: 'rgb(228,235,243)',
          200: 'rgb(198,214,231)',
          300: 'rgb(163,191,217)',
          400: 'rgb(85,148,196)',
          500: '#1d83bc',
          600: 'rgb(28,124,178)',
          700: 'rgb(25,113,163)',
          800: 'rgb(19,85,122)',
          900: 'rgb(16,72,103)',
        },
        secondary: {
          50: 'rgb(255,244,242)',
          100: 'rgb(255,232,228)',
          200: 'rgb(255,206,198)',
          300: 'rgb(255,177,161)',
          400: 'rgb(255,120,81)',
          500: '#ff5e00',
          600: 'rgb(242,89,0)',
          700: 'rgb(221,81,0)',
          800: 'rgb(165,61,0)',
          900: 'rgb(140,51,0)',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50: 'rgb(252,242,242)',
          100: 'rgb(248,229,229)',
          200: 'rgb(242,199,199)',
          300: 'rgb(235,164,164)',
          400: 'rgb(224,88,88)',
          500: '#DC2626',
          600: 'rgb(209,36,36)',
          700: 'rgb(191,33,33)',
          800: 'rgb(143,25,25)',
          900: 'rgb(120,21,21)',
        },
      },
    },
  },
  plugins: [],
}