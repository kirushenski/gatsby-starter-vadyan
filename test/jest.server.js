const commonConfig = require('./jest.common')

module.exports = {
  ...commonConfig,
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__server_tests__/**/*.{ts,js}'],
}
