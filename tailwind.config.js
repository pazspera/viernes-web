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
        'text': ['Karla', 'sans-serif'],
        'title': ['Cardo', 'serif'],
        'logo': ['"Major Mono Display"', 'monospace']
      }
    },
  },
  plugins: [],
}
