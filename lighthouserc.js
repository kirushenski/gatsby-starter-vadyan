// Configuration for Lighthouse CI
module.exports = {
  ci: {
    collect: {
      // Run Lighthouse only on these routes. Localhost port will be added automatically
      url: ['http://localhost/', 'http://localhost/showcase/'],
      // We need to set build result folder now explicitly because we defined url property
      staticDistDir: './public',
    },
    upload: {
      // We don't wandtto set up our own server to save reports in a long term
      target: 'temporary-public-storage',
    },
  },
}
