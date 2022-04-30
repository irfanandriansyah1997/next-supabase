module.exports = {
  ...require('./jest.common'),
  displayName: 'dom',
  setupFiles: [], // INFO: you can add handler for enabling mock for example local storage ('jest-localstorage-mock') / cookies
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.[t]s?(x)', '**/?(*.)+(test).[t]s?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
