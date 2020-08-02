// Custom Babel settings. We use Gatsby settings from preset and extend them with our own
const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript', '@emotion/babel-preset-css-prop'],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
