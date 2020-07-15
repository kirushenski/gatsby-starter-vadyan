import path from 'path'
import * as webpack from 'webpack'

export default {
  stories: ['./welcome.stories.mdx', '../src/components/**/*.stories.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  webpackFinal: async (config: webpack.Configuration) => {
    const babelRule = config.module?.rules.find(rule => rule.test?.toString() === /\.(mjs|tsx?|jsx?)$/.toString())
    if (babelRule) {
      // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code
      babelRule.exclude = [/node_modules\/(?!(gatsby)\/)/]
      const babelRuleUse = (babelRule.use as any)[0]
      // Add Emotion css prop support
      babelRuleUse.options.presets.push(require.resolve('@emotion/babel-preset-css-prop'))
      // Remove static queries from components
      babelRuleUse.options.plugins.push(require.resolve('babel-plugin-remove-graphql-queries'))
    }

    // Add Svgr support
    if (config.module) {
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
    }

    // Add aliases support
    if (config.resolve) {
      config.resolve.alias = {
        '@': path.join(__dirname, '../src'),
      }
    }

    // Disable performance budgets for Storybook
    config.performance = false

    return config
  },
}
