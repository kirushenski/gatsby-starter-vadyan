// This config extends base config and solves conflicts between Jest and Mocha/Chai which are used by Cypress
module.exports = {
  extends: ['plugin:cypress/recommended'],
  rules: {
    'jest/expect-expect': 0,
    'jest/valid-expect': 0,
    'testing-library/await-async-query': 0,
  },
}
