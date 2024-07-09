/** @type {import('tailwindcss').Config} */
import b from './public/image'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsxl: "370px",
      xsm: "450px",
      sm: "640px",
      md: "768px",
      xmd: "850px",
      lg: "1024px",
      xlg: "1100px",
      xl: "1280px",
      "2xl": "1536px",
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      backgroundImage: {
        'myimage': "url('./public/image/Blog2.png')",
        'secondMyImage': "url('./public/image/Background.png')",
        'thirdMyImage': "url('./public/image/Background2.png')",
        'fourthMyImage': "url('./public/image/Background3.png')"
      }
    },
  },
  plugins: [],
}

