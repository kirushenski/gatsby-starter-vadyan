const commonConfig = require('./jest.common')

module.exports = {
  ...commonConfig,
  displayName: 'client',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
}
