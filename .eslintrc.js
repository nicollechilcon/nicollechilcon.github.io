/* eslint-disable no-undef */

module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'semi': [2, 'always'],
    'no-trailing-spaces': [2, { 'skipBlankLines': true }],
    'eol-last': ['error', 'always'],
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'quotes': [2, 'single']
  }
};
