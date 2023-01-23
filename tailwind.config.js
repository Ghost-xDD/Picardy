/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-euclid)', ...defaultTheme.fontFamily.serif],
        sans: ['var(--font-lemonmilk)', ...defaultTheme.fontFamily.serif],
        mono: ['var(--font-euclidLight)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        cardGrey: 'rgba(147, 147, 147, 0.1)',
        faintYellow: 'rgba(249, 204, 22, 0.1)',
        claimFooter: 'rgba(249, 204, 22, 1)',
        footerBlack: 'rgba(2, 3, 4, 1)',
        guideYellow: 'rgba(249, 204, 22, 1)',
        claimYellow: 'rgba(255, 255, 255, 1)',
        fainterYellow: 'rgba(249, 204, 22, 0.15)',
      },
    },
  },
  plugins: [],
};
