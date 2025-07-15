/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'passport-navy': '#0e2653',
        'passport-blue': '#3883e3',
        'passport-gray': '#f9fafb'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}