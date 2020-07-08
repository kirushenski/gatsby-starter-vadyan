module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
    description: 'Gatsby starter for personal projects',
  },
  plugins: [
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@components': 'src/components',
          '@utils': 'src/utils',
          '@hooks': 'src/utils/hooks',
          '@api': 'src/api',
          '@images': 'src/images',
          '@icons': 'src/images/icons',
          '@decorators': '.storybook/decorators',
        },
      },
    },
    'gatsby-plugin-emotion',
  ],
}
