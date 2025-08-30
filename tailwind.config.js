/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          menu:"#009DAA"
      },
      fontFamily: {
        taj: 'Tajawal',         
       
      },

    },
  },
  plugins: [
    daisyui,
  
  ],
  daisyui: {
    themes:  ["light", "dark",{"toogle":"#fff"}], 
    darkTheme: "light", 
  },
}















