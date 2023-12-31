/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        slidedown: "slidedown 0.3s ease forwards",
        slidetop: "slidetop 0.3s ease forwards",
      },
      keyframes: {
        slidedown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slidetop:{
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      backgroundImage: {
        'gradient2': 'linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 79.17%)',
        'gradient': 'linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)',
        
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        navbar:"rgba(0,0,0,0.25)",
        blur:"rgba(0,0,0,0.7)",
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "330px",
      ms:"460",
      ss: "620px",
      sm: "890px",
      ssm:"980px",
      md: "1090px",
      lg: "1300px",
      xl: "1700px",
    },
  },
  plugins: [],
};