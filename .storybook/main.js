const path = require('path')
// remove storybook from ignore
// prettier printWidth
// children controls
// defaultValue and onValueChange obsolete controls
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
      '@components': path.join(__dirname, '../src/components'),
      '@pages': path.join(__dirname, '../src/pages'),
      '@utils': path.join(__dirname, '../src/utils'),
      '@hooks': path.join(__dirname, '../src/utils/hooks'),
      '@api': path.join(__dirname, '../src/api'),
      '@images': path.join(__dirname, '../src/images'),
      '@icons': path.join(__dirname, '../src/icons'),
    }

    config.resolve.mainFields = ['browser', 'module', 'main']

    return config
  },
}
