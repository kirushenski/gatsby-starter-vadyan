// Extend default Gatsby config with SVGR support, aliases and Webpack Bundle Analyzer
const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

exports.onCreateWebpackConfig = ({ getConfig, actions, stage, loaders }) => {
  const existingConfig = getConfig()

  const rules = existingConfig.module.rules.map(rule => {
    if (String(rule.test) === String(/\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/)) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/,
      }
    }
    return rule
  })

  actions.replaceWebpackConfig({
    ...existingConfig,
    module: {
      ...existingConfig.module,
      rules,
    },
  })

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/,
          issuer: /\.(?!(j|t)sx?)$/,
          use: loaders.url(),
        },
        {
          test: /\.svg$/,
          issuer: /\.((j|t)sx?)$/,
          use: {
            loader: require.resolve(`@svgr/webpack`),
            options: {
              titleProp: true,
            },
          },
        },
      ],
    },
    plugins:
      stage === 'build-javascript'
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              defaultSizes: 'gzip',
              openAnalyzer: false,
              generateStatsFile: true,
            }),
          ]
        : [],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
