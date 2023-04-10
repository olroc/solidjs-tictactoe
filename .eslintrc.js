module.exports = {
  plugins: ['solid'],
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:solid/typescript',
    'prettier',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  rules: {
    'no-undef': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
  },
}
