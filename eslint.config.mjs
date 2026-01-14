// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: ["**/*.ts", "**/*.js", "**/*.vue", "**/*.mjs"],
  ignores: ["dist", ".output", "node_modules"],
  rules: {
    "no-console": "warn",
    "vue/multi-word-component-names": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "@stylistic/quotes": ["error", "single"],
    "@stylistic/semi": ["error", "never"],
    "@stylistic/comma-dangle": ["error", "always-multiline"],
  },
});
