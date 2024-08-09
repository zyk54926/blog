/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}'],
  darkMode: 'class', // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        base: 'rgb(var(--color-base))',
        back: 'rgb(var(--color-back))',
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        hover: 'rgb(var(--color-hover))',
        active: 'rgb(var(--color-active))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
}
