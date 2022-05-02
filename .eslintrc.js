module.exports = {
  extends: ['next/core-web-vitals', 'prettier', 'plugin:jsdoc/recommended'],
  plugins: [
    'jsdoc',
    'import',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    '@emotion',
    'typescript-sort-keys'
  ],
  rules: {
    '@emotion/pkg-renaming': 2,
    '@typescript-eslint/ban-types': [0],
    camelcase: 0,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'default-case': 0,
    'global-require': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-dynamic-require': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'jsdoc/no-undefined-types': 0,
    'jsdoc/require-example': 0,
    'no-multiple-empty-lines': [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-shadow': 0,
    'no-unused-vars': 2,
    quotes: 0,
    semi: [2, 'always'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^@?\\w'],
          ['@/'],
          ['(?=.*.interface$)'],
          ['(?=.*.const$)'],
          ['(?=.*.spec$)'],
          [
            '^\\u0000',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$'
          ]
        ]
      }
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      {
        caseSensitive: false
      }
    ],
    'sort-imports': 0,
    'sort-keys-fix/sort-keys-fix': 2,
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error'
  }
};
