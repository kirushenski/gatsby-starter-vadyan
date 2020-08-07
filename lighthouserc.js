module.exports = {
  ci: {
    collect: {
      url: ['http://localhost/', 'http://localhost/showcase/'],
      staticDistDir: './public',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
