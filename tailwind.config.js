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
      },
      colors: {
        primary: {
          DEFAULT: '#E3170A',
          dark: '#890E06',
          light: '#F7483B'
        },
        secondary: '#131316',
        accent: '',
        background: '#FEF1D7',
        surface: '#B4C0D0'
      }
    },
  },
  plugins: [],
}
