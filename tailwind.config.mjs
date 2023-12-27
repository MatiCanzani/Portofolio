/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#181a1d",
        cream: "#FAF9FE",
      },
      backgroundImage: {
        hero: "url('./src/images/ocean.jpg')",
      },
      textShadow: {
        DEFAULT: "3px 5px 0  rgba(51, 56, 62, 0.67)",
        title: "3px 5px 0  rgba(51, 56, 62, 0.67)",
      },
      cursor: {
        circle: "url(../../src/images/icons/circle.svg), pointer",
        big: "url(../../src/images/icons/circle-dot.svg), pointer",
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },

        { values: theme("textShadow") }
      );
    }),
  ],
};
