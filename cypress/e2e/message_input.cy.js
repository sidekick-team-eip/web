describe('Check the header of the message page', () => {
    it('passes', () => {

    cy.visit('http://localhost:3000')
      cy.contains('Log in').click()
      // Should be on a new URL which
      // includes '/login'
      cy.url().should('include', '/login')
      cy.get('.mt-16 > .MuiFormControl-root > .MuiInputBase-root > #custom-css-outlined-input')
      .type('Admin@test.com')
      .should('have.value', 'Admin@test.com')

      cy.get('[style="margin: 20px;"] > .MuiFormControl-root > .MuiInputBase-root > #custom-css-outlined-input')
      .type('Password123')
      .should('have.value', 'Password123')

      cy.get(':nth-child(3) > .button').click()

      cy.wait(2000)
      cy.reload()
      

      // got acces to the message age
      cy.get('.text-xs > :nth-child(2) > a').click()
      cy.url().should('include', '/message')

      cy.contains("last seen")
      cy.contains("last seen")
      cy.contains("last seen")
    })
  })