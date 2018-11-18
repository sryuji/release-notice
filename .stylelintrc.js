module.exports = {
  extends: [
    "./node_modules/prettier-stylelint/config.js",
    "stylelint-config-recommended"
  ],
  ignoreFiles: ["**/.vscode/**", "**/.nuxt/**", "**/node_modules/**"],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-empty-source": null,
    "no-invalid-double-slash-comments": null,
    "property-no-unknown": [
      true,
      {
        ignoreProperties: "//"
      }
    ]
  }
};
