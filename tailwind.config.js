/** @type {import('tailwindcss').Config} */
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
        'myimage': "url('./src/assets/image/Blog2.png')",
        'secondMyImage': "url('./src/assets/image/Background.png')",
        'thirdMyImage': "url('./src/assets/image/Background2.png')",
        'fourthMyImage': "url('./src/assets/image/Background3.png')"
      }
    },
  },
  plugins: [],
}

