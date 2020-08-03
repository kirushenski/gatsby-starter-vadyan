describe('App test', () => {
  it('Check pages navigation', () => {
    cy.visit('/')
    cy.findByText(/Go/).click().url().should('include', '/another')
    cy.findByText(/Back/).click().location('pathname').should('eq', '/')
  })
})

// test('navigation between pages is working', async () => {
//   const content = 'Page content'
//   render(<Layout>{content}</Layout>)
//   const secondPageLink = screen.getByRole('link', { name: /showcase/i })
//   user.click(secondPageLink)
//   const secondPageHeading = await screen.findByRole('heading', { name: /showcase/i })
//   expect(secondPageHeading).toBeInTheDocument()
//   const mainPageLink = screen.getByRole('link', { name: /quick start/i })
//   user.click(mainPageLink)
//   const mainPageHeading = await screen.findByRole('heading', { name: /quick start/i })
//   expect(mainPageHeading).toBeInTheDocument()
// })
