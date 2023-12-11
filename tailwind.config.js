/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      pink: 'oklch(77.33% 0.1 326.12 / <alpha-value>)',
      violate: 'oklch(77.33% 0.1 300.71 / <alpha-value>)',
      blue: 'oklch(78.78% 0.1 252.64 / <alpha-value>)',
      green: 'oklch(78.78% 0.1 190.68 / <alpha-value>)',
      black: 'oklch(24.67% 0.025 250.94 / <alpha-value>)',
      white: 'oklch(94.12% 0.007 250.94)'
    },
    extend: {}
  },
  plugins: []
}
