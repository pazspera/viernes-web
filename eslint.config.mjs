// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'no-console': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    '@stylistic/comma-dangle': 'warn',
    '@stylistic/quotes': 'warn',
    '@stylistic/semi': 'warn',
  },
})
