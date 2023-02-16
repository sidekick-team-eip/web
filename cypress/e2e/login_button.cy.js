describe('Login button test home page', () => {
    it('it find the button login and press it', () => {
      cy.visit('http://localhost:3000')
      cy.contains('Log in').click()
      // Should be on a new URL which
      // includes '/login'
      cy.url().should('include', '/login')
    })
  })