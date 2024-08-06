/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00704a",
        primaryDark: "#00704a",
        lightorange: "#F5F5F5",
        darkgray: "#00704a",
        lightGray: "#272c35",
        lightcolor: "#edebe9",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      height: {
        'hr-thick': '1px', // Custom height for <hr>
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
      },
    },
  },
  plugins: [],
}
