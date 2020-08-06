describe('characters test', () => {
  it('characters start with Rick and changed on button click', () => {
    cy.visit('/showcase/')
    cy.findByRole('article').contains(/rick/i)
    cy.findByRole('button', { name: /randomize/i }).click()
    cy.findByRole('article').contains(/loading/i)
  })
})
