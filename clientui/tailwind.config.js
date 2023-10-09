/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#335BFF",
        "neutral-white": "#fff",
        "neutral-gray-dark": "#52575c",
        "neutral-black": "#25282b",
        "red-default": "#ff6760",
        "neutral-background": "#f6f8fb",
        "neutral-gray": "#a0a4a8",
        "neutral-divider": "#e8e8e8",
        "primary-default": "#336cfb",
        "neutral-gray-light": "#cacccf",
      },
    },
  },
  plugins: [],
  corePlugins: {
      preflight: false
  },
}

