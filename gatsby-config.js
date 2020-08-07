const path = require('path')
const config = require('./config')

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    baseUrl: config.baseUrl,
    lang: config.lang,
    facebookUsername: config.facebookUsername,
    twitterUsername: config.twitterUsername,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@theme': path.join(__dirname, 'config/theme.ts'),
          '@': path.join(__dirname, 'src'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src/images'),
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 75,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        titleProp: true,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        defaultSizes: 'gzip',
        openAnalyzer: false,
        generateStatsFile: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: '/',
        display: 'standalone',
        name: config.title,
        short_name: config.shortTitle,
        description: config.description,
        lang: config.lang,
        icon: config.favicon,
        icon_options: { purpose: 'maskable' },
        theme_color: config.themeColor,
        background_color: config.backgroundColor,
      },
    },
    'gatsby-plugin-offline',
  ],
}
