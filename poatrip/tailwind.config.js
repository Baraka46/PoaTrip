/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#2ECC71",     
        secondary: "#3498DB",   
        accent: "#FF9F68",      
        background: "#FAFAFA",  
        text: "#333333",        
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
}

