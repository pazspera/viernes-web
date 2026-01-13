export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./app/**/*.{js,vue,ts}",
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
      }
    },
  },
  plugins: [],
}
