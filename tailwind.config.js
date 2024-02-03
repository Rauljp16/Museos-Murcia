/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        110: "27.5rem",
        120: "30rem",
        130: "32.5rem",
        140: "35rem",
        150: "37.5rem",
        160: "40rem",
        170: "42.5rem",
        180: "45rem",
      },
      fontFamily: {
        caveat: ["caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
