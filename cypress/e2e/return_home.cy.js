describe('Test the icon to go back on the home page', () => {
    it('Test the icon to go back on the home page', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('.site-header-inner > .brand > .m-0 > a > img').click()
      // Should be on a new URL which
      // includes '/'
      cy.url().should('include', 'http://localhost:3000/')
      cy.visit('http://localhost:3000/signup')
      cy.get('.site-header-inner > .brand > .m-0 > a > img').click()
      // Should be on a new URL which
      // includes '/'
      cy.url().should('include', 'http://localhost:3000/')
    })
  })