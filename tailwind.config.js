/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue1': '#00249C',
      'blue2': '#40CEE4',
      'grey1': '#C5C5C5',
      'red2': '#E280BE',
      'red1': '#C6007E',
      'white': '#fff',
      'transparent': 'transparent'
    },
    screens: {
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
      "4xl": "1920px"
    },
    boxShadow: {
      "custom-md": "0px 0px 10px grey"
    }
  },
  plugins: [],
}

