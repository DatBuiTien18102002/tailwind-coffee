/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: "['Karla', 'sans-serif']"
      },
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          from: {
            opacity: 0,
            bottom: 0
          },
          to: {
            opacity: 1,
            bottom: '1rem'
          }
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in ',
        fadeIn: 'fadeIn .4s ease-in-out'
      }
    },
  },
  plugins: [],
}

