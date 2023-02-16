describe('Check the About us section on the home page', () => {
    it('Check the About us section on the home page', () => {
      cy.visit('http://localhost:3000')
      cy.contains('About Us')
    })
  })