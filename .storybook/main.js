const path = require('path')

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    // Make Storybook compatible with postcss@8 which is used by last version of Tailwind
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes untranspiled ES6 code
    config.module.rules[0].exclude = [/node_modules[\\/](?!(gatsby)[\\/])/]
    // Remove static queries to make components with useStaticQuery work inside Storybook
    config.module.rules[0].use[0].options.plugins.push([
      require.resolve('babel-plugin-remove-graphql-queries'),
      {
        stage: 'develop-html',
        staticQueryDir: 'page-data/sq/d',
      },
    ])

    // Add SVGR support
    config.module.rules.find(rule => rule.test && rule.test.test('.svg')).exclude = path.resolve(
      __dirname,
      '../src/icons'
    )
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, '../src/icons'),
      issuer: /\.((j|t)sx?)$/,
      use: {
        loader: require.resolve(`@svgr/webpack`),
        options: {
          titleProp: true,
        },
      },
    })

    // Add aliases support
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
    }

    // Pass empty module instead of polyfill for the conflicting module (for webpack@5 compatibility)
    config.resolve.fallback = {
      crypto: false,
    }

    // Disable performance budgets which don't make much sense for Storybook
    config.performance = false

    return config
  },
  core: {
    builder: 'webpack5',
  },
}
