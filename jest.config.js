const commonConfig = require('./test/jest.common')

module.exports = {
  ...commonConfig,
  collectCoverageFrom: ['src/**/*.{tsx,ts,js}'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  projects: [
    './test/jest.client.js',
    './test/jest.server.js',
    './test/jest.lint.js',
  ],
}
