describe('IOS redirection button on the home page', () => {
    it('it find the button IOS and press it', () => {
      cy.visit('http://localhost:3000')

      cy.get('[href="https://apps.apple.com/us/app/apple-store/id375380948"]')
        .should('have.attr', 'href')
        .and('include', 'id375380948')

      //cy.contains('Get for IOS').click()
      // Should be on a new URL which
      // includes '/login'
      //cy.url().should('include', 'id375380948')
    })
  })