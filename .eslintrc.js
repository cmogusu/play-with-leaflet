module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  plugins: ['prettier'],
  rules: {
    code: 0,
    'prefer-promise-reject-errors': 0,
    'prettier/prettier': [
      1,
      { singleQuote: true, semi: false, trailingComma: 'all' },
    ],
    'no-console': 1,
    'no-debugger': 2,
    'import/prefer-default-export': 1,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-sort-props': [1, { callbacksLast: true }],
    'react/sort-prop-types': [1, { callbacksLast: true }],
    'react/jsx-no-bind': [2, { allowArrowFunctions: false, allowBind: false }],
    'react/jsx-boolean-value': 2,
    'react/jsx-handler-names': 2,
    'react/destructuring-assignment': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-redeclare': [2, { builtinGlobals: true }],
    'no-underscore-dangle': ['error', { allow: ['_id', '_rev'] }],
    'no-shadow': [
      2,
      {
        builtinGlobals: true,
        allow: [
          'location',
          'event',
          'history',
          'find',
          'root',
          'name',
          'close',
          'Map',
          'Text',
          'Request',
        ],
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      classes: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
