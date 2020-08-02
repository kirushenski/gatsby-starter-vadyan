const React = require('react')

const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  // Replace router Link with simple 'a' tag
  Link: jest.fn().mockImplementation(
    // These props are invalid for an 'a' tag
    ({ activeClassName, activeStyle, getProps, innerRef, partiallyActive, ref, replace, to, ...rest }) =>
      React.createElement('a', { ...rest, href: to })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}
