/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter", "forest"],
  },
}
