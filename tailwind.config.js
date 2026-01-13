import { themeColors } from "./app/constants/colors";

// creates a string with all personalized classes to add to safelist
const colorNames = Object.keys(themeColors).join("|");

export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./error.vue",
  ],
  safelist: [
    {
      pattern: new RegExp(`bg-(${colorNames})`),
      variants: ['hover', 'focus', 'active'],
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        // defaults
        sans: ['Karla', 'sans-serif'],
        serif: ['Cardo', 'serif'],
        mono: ['"Major Mono Display"', 'monospace'],
        // personalized fonts
        'text': ['Karla', 'sans-serif'],
        'title': ['Cardo', 'serif'],
        'logo': ['"Major Mono Display"', 'monospace']
      },
      colors: themeColors
    },
  },
  plugins: [],
}
