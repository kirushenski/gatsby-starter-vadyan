describe('navigation test', () => {
  it('navigation between pages works', () => {
    cy.visit('/')
    cy.findByRole('link', { name: /showcase/i }).click()
    cy.findByRole('heading', { name: /showcase/i }).should('exist')
    cy.findByRole('link', { name: /quick start/i }).click()
    cy.findByRole('heading', { name: /quick start/i }).should('exist')
  })

  it('click on title in header returns to the main page', () => {
    cy.visit('/showcase/')
    cy.findByRole('link', { name: /gatsby starter vadyan/i })
      .click()
      .location('pathname')
      .should('eq', '/')
  })

  it('navigation link of current location has active class', () => {
    cy.visit('/')
    cy.findByRole('link', { name: /quick start/i }).should('have.class', 'active')
    cy.findByRole('link', { name: /showcase/i })
      .should('not.have.class', 'active')
      .click()
    cy.findByRole('link', { name: /quick start/i }).should('not.have.class', 'active')
    cy.findByRole('link', { name: /showcase/i }).should('have.class', 'active')
  })
})
