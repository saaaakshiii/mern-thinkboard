/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",                 // Vite entry point
    "./src/**/*.{js,jsx,ts,tsx}"    // Scan React components
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui:{
    themes: ["forest", "coffee"],
  },
}
