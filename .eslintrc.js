module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  rules: {
    'prettier/prettier': 'warn'
  }
};
