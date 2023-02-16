describe('Android redirection button on the home page', () => {
  it('it find the button android and press it', () => {

    cy.visit('http://localhost:3000')
    cy.get('[href="https://play.google.com/store/games"]')
    .should('have.attr', 'href')
    .and('include', '/store/games')

    //cy.contains('Get for Android').click()
    // Should be on a new URL which
    // includes '/login'
    //cy.url().should('include', '/store/games')

  })
})