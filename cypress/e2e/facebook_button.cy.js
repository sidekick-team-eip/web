describe('Facebook redirection button on the home page', () => {
    it('it find the button Facebook and press it', () => {
      cy.visit('http://localhost:3000')
      cy.get('.facebook_icon')
        .should('have.attr', 'href')
        .and('include', '/TheJoyofPaintingWithBobRoss')

      // Should be on a new URL which
      //cy.url().should('include', '/TheJoyofPaintingWithBobRoss')
      //blocked for now because of cross domain
    })
  })