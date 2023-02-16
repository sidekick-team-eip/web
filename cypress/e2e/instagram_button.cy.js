describe('Instagram redirection button on the home page', () => {
    it('it find the button instagram and press it', () => {
      cy.visit('http://localhost:3000')
      cy.get('.instagram_icon')
        .should('have.attr', 'href')
        .and('include', '/sidekick_eip')
      // Should be on a new URL which
      // blocked for now because of cross domain
      // verification of the href
    })
  })