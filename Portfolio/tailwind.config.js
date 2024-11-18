/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        polygon: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
      darkMode: 'class',
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20, end) 1s infinite alternate , blink 1s step-end infinite"
      }
    },
  },


  plugins: [require('tailwind-clip-path')],
}

