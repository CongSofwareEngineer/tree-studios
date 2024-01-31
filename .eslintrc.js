module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    indent: [2, 2],
    quotes: ['error', 'single'],
    'space-in-parens': ['error', 'never'],
    'react/no-unknown-property': 'off',
    'no-unused-vars': 0,
    semi: 'off',
    'react/prop-types': 0,
    'react/display-name': 'off',
    'no-empty-pattern': 0
  }
}
