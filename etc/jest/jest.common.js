/* eslint-disable sort-keys-fix/sort-keys-fix */

const path = require('path');

module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', '/etc', '/__test__/'],
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../..'),
    path.join(__dirname)
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  rootDir: path.join(__dirname, '../..'),
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  setupFilesAfterEnv: [
    '<rootDir>/etc/jest/setup/react-testing-library-setup.js'
  ],
  verbose: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-runner-eslint/watch-fix',
    'jest-watch-select-projects'
  ]
};
