describe('App test', () => {
  it('Check pages navigation', () => {
    cy.visit('/')
    cy.findByText(/Go/).click().url().should('include', '/another')
    cy.findByText(/Back/).click().location('pathname').should('eq', '/')
  })
})
