const commonConfig = require('./jest.common')

module.exports = {
  ...commonConfig,
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/**/*.{tsx,ts,mdx,js}'],
}
