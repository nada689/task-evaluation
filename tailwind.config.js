
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'shell': '#F8EEE7',
        'sand': '#eadfd6',
        'grape': '#925c8a',
        'light-grape': '#6B4F72',
        'eggplant': '#49274A',
        'thin-grape': '#c48dba',
        'btn':'#fb923c',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      }
    },
  },
  plugins: [],
}
