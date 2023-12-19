/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cream: "#F9F0E5",
      darkblue: "#01005B",
      "neutral-300": "#828282",
      "neutral-500": "#565656",
      "neutral-600": "#676869",
    },
    extend: {
      fontFamily: {
        sofiapro: ["Poppins", "sans-serif"],
        suisse: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        lucille1: "url('/src/assets/images/lucille-1.jpeg')",
        lucille2: "url('/src/assets/images/lucille-2.jpeg')",
        girlreading: "url('/src/assets/images/girl-reading.png')",
      },
      gradientColorStops: {
        "orange-100": "#F9F0E5",
        "orange-200": "rgba(249, 240, 229, 0.18)",
        transparent: "rgba(249, 240, 229, 0.00)",
      },
    },
  },
};

/*
font-family: 'Inter', sans-serif;
font-family: 'Poppins', sans-serif;
*/
