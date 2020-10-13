const path = require('path')

module.exports = {
  // All stories are written in mdx
  stories: ['../src/components/**/*.stories.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  webpackFinal: async config => {
    // Set NODE_ENV to 'test' by default, to allow babel-plugin-remove-graphql-queries to do his job
    process.env.NODE_ENV = 'test'

    const babelRule = config.module.rules.find(rule => rule.test.toString() === /\.(mjs|tsx?|jsx?)$/.toString())
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code
    babelRule.exclude = [/node_modules[\\/](?!(gatsby)[\\/])/]
    // Add Emotion css prop support
    babelRule.use[0].options.presets.push(require.resolve('@emotion/babel-preset-css-prop'))
    // Remove static queries from components
    babelRule.use[0].options.plugins.push(require.resolve('babel-plugin-remove-graphql-queries'))

    // Add Svgr support
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            titleProp: true,
          },
        },
        'url-loader',
      ],
    })

    // Add aliases support
    config.resolve.alias = {
      '@theme': path.join(__dirname, '../config/theme.ts'),
      '@': path.join(__dirname, '../src'),
    }

    // Disable performance budgets which don't make sense for Storybook
    config.performance = false

    return config
  },
}
