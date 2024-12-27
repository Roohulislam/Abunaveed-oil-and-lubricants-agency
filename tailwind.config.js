/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#5466a1",
        secondary:"#3f465e"
      },
      container:{
        center:true,
        padding:{
          DEFAULT :"1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
}