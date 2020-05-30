module.exports = {
  root: true,
  extends: [
    'airbnb'
  ],
  rules: {
    'arrow-body-style': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }]
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
  ]
};
