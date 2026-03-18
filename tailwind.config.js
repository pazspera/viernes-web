import { themeColors } from "./app/constants/colors";

// creates a string with all personalized classes to add to safelist
const colorNames = Object.keys(themeColors).join("|");

export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./app/components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./error.vue",
  ],
  safelist: [
    {
      pattern: new RegExp(`bg-(${colorNames})`),
      variants: ["hover", "focus", "active"],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        // defaults
        sans: ["Karla", "sans-serif"],
        serif: ["Cardo", "serif"],
        mono: ['"Major Mono Display"', "monospace"],
        // personalized fonts
        text: ["Karla", "sans-serif"],
        title: ["Cardo", "serif"],
        logo: ['"Major Mono Display"', "monospace"],
      },
      colors: {
        primary: {
          100: "#F9928A",
          200: "#F86C62",
          300: "#F7483B",
          400: "#F63528",
          500: "#E3170A", // main
          600: "#C41508",
          700: "#9D1107",
          800: "#880F06",
          900: "#760C05",
        },
        white: "#FFFAFF",
        black: "#131316",
        accent: {
          100: "#E4F8B5",
          200: "#D6F490",
          300: "#CFF27E", // main
          400: "#C1EE58",
          500: "#BAED45",
          600: "#B4EB33",
          700: "#ADE920",
          800: "#A3DF16",
          900: "#95CC14",
        },
      },
    },
  },
  plugins: [],
};
