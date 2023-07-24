/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    minWidth: {
      320: "320px",
    },
    boxShadow: {
      default: "0 0 8px 0 rgba(0,0,0,.1)",
    },
    backgroundColor: {
      body: "#fff",
      content: "#f2f2f2",
      "body-opacity": "#cbcbcb",
      orange: "#ff503c",
      "orange-hover": "#cc4030",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    textColor: {
      default: "#0d0d0d",
      white: "#fff",
      orange: "#ff503c",
    },
    outlineColor: {
      orange: "#ff503c",
    },
    borderColor: {
      orange: "#ff503c",
    },
  },
  plugins: [],
};
