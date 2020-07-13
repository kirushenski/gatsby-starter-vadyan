const path = require('path')

module.exports = {
  stories: ['./welcome.stories.mdx', '../src/components/**/*.stories.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  webpackFinal: async config => {
    const babelRule = config.module.rules.find(rule => rule.test.toString() === /\.(mjs|tsx?|jsx?)$/.toString())
    babelRule.exclude = [/node_modules\/(?!(gatsby)\/)/]
    babelRule.use[0].options.presets.push(require.resolve('@emotion/babel-preset-css-prop'))
    babelRule.use[0].options.plugins.push(require.resolve('babel-plugin-remove-graphql-queries'))

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

    config.resolve.alias = {
      '@': path.join(__dirname, '../src'),
    }

    config.resolve.mainFields = ['browser', 'module', 'main']

    return config
  },
}
