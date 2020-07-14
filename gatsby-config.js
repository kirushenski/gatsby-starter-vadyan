const path = require('path')

console.log(path.join(__dirname, 'src'))
module.exports = {
  siteMetadata: {
    title: 'Gatsby starter',
    description: 'Gatsby starter for personal projects',
    keywords: ['gatsby', 'starter'],
    /* Absolute deployment path without trailing slash */
    baseUrl: '',
    /* Used for facebook SEO. Pass 'website' or 'article' */
    contentType: 'website',
    /* Author usernames on social accounts */
    socials: {
      twitter: '',
      facebook: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@': path.join(__dirname, 'src'),
        },
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 75,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src/images'),
      },
    },
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
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
        omitGoogleFont: true,
      },
    },
  ],
}
