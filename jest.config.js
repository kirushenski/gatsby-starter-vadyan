const path = require('path')

module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': path.join(__dirname, 'test/jest-preprocess.js'),
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|webp|woff|woff2|mp4|webm|mp3)$': '<rootDir>/__mocks__/file.js',
    '.+\\.svg$': '<rootDir>/__mocks__/svgr.js',
    '@test-utils': '<rootDir>/test/test-utils.tsx',
    '@/(.*)': '<rootDir>/src/$1',
  },
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: [path.join(__dirname, 'test/loadershim.js')],
  watchPlugins: ['jest-watch-select-projects', 'jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
  collectCoverageFrom: ['src/**/*.{tsx,ts,js}'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
}
