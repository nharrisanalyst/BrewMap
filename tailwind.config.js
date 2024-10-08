/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
              'xs': '.75rem',
               'sm': '.875rem',
               'tiny': '.55rem',
               'base': '1rem',
               'lg': '1.125rem',
               'xl': '1.25rem',
               '2xl': '1.5rem',
               '3xl': '1.875rem',
               '4xl': '2.25rem',
               '5xl': '3rem',
               '6xl': '4rem',
               '7xl': '5rem',
            },
    fontWeight: {
              hairline: 100,
              'extra-light': 100,
              thin: 200,
              light: 300,
              normal: 400,
              medium: 500,
              semibold: 600,
              bold: 700,
              extrabold: 800,
              'extra-bold': 800,
              black: 900,
            },
    extend: {},
  },
  plugins: [],
}

