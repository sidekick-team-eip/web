describe('Sign up button test home page', () => {
  it('it find the button signup and press it', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Sign up').click()
    // Should be on a new URL which
    // includes '/login'
    cy.url().should('include', '/signup')
  })
})