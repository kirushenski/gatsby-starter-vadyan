const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  transform: {
    '^.+\\.[tj]sx?$': path.join(__dirname, 'jest-preprocess.js'),
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|webp|svg|woff|woff2|mp4|webm|mp3)$':
      '<rootDir>/__mocks__/file.js',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@hooks/(.*)': '<rootDir>/src/utils/hooks/$1',
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@images/(.*)': '<rootDir>/src/images/$1',
    '@icons/(.*)': '<rootDir>/src/images/icons/$1',
    '@decorators/(.*)': '<rootDir>/.storybook/decorators/$1',
  },
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: [path.join(__dirname, 'loadershim.js')],
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
