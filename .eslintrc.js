module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'typescript-eslint-parser',
  },
  // 他のextendsされたルールを上書いて無効化するので順番に注意
  extends: [
    'standard',
    'typescript',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'typescript/prettier',
  ],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'require-jsdoc': 'off',
    'typescript/member-delimiter-style': 'off',
    'prettier/prettier': [
      'error',
      // eslint側にrule反映するため, prittierrcでなくこちらに記載
      {
        trailingComma: 'all',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        printWidth: 100,
      },
      { usePrettierrc: false },
    ],
  },
}
