module.exports = {
  // Transform files with our own Babel config
  transform: { '^.+\\.[tj]sx?$': '<rootDir>/test/jest-preprocess.js' },
  // Add manual mocks and aliases support
  moduleNameMapper: {
    '.+\\.(svg|jpg|jpeg|png|webp|woff|woff2|mp4|webm|mp3|css)$': '<rootDir>/__mocks__/file.js',
    '@test-utils': '<rootDir>/test/test-utils.tsx',
    '@/(.*)': '<rootDir>/src/$1',
  },
  // Ignore Gatsby tests directory in cache
  testPathIgnorePatterns: ['node_modules', '.cache'],
  // Transform Gatsby because it includes un-transpiled ES6 code
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  // Add some globals overrides for Gatsby
  setupFiles: ['<rootDir>/test/loadershim.js'],
  // Add custom matchers
  setupFilesAfterEnv: ['<rootDir>/test/setup-test-env.js'],
  // Extend Jest watch mode possibilities
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  // We use Jest to test components and utils
  collectCoverageFrom: ['<rootDir>/src/components/**/*.{tsx,ts,js}', '<rootDir>/src/utils/*.{tsx,ts,js}'],
}
