/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:
      {
        'v-d-blue':'hsl(243, 87%, 12%)',
        'd-blue' : 'hsl(238, 22%, 44%)',
        'b-blue' : 'hsl(224, 93%, 58%)',
        'm-cyan' : 'hsl(170, 45%, 43%)',
        'l-g-blue': 'hsl(240, 75%, 98%)',
        'l-gray': 'hsl(0, 0%, 75%)',
      },
      fontFamily:{
        'raleway' : 'Raleway, sans-serif',
        'openSans' : 'Open Sans, sans-serif',
      },
    },
  },
  plugins: [],
}
