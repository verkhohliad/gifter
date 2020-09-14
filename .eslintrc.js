module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  'overrides': [
    {
      'files': [
        '**/*.spec.js',
        '**/*.spec.jsx'
      ],
      'env': {
        'jest': true
      }
    }
  ],
  rules: {
    'arrow-body-style': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', {'packageDir': './'}],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'max-len': ['error', { 'code': 150 }],
    'react/jsx-props-no-spreading': 'off',
  },
};
