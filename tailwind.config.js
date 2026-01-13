export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./error.vue",
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
