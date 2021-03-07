const path = require('path')

module.exports = {
  // All stories are written in tsx
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code
    config.module.rules[0].exclude = [/node_modules[\\/](?!(gatsby)[\\/])/]
    // Remove static queries from components
    config.module.rules[0].use[0].options.plugins.push([
      require.resolve('babel-plugin-remove-graphql-queries'),
      {
        stage: config.mode === `development` ? 'develop-html' : 'build-html',
        staticQueryDir: 'page-data/sq/d',
      },
    ])

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
      '@': path.join(__dirname, '../src'),
    }

    // Disable performance budgets which don't make sense for Storybook
    config.performance = false

    return config
  },
}
