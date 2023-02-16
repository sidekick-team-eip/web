describe('Test on the inputs from login', () => {
    it('Try to fill the inputs for login', () => {
  
      cy.visit('http://localhost:3000/login')
  
      cy.get('.mt-16 > .MuiFormControl-root > .MuiInputBase-root > #custom-css-outlined-input')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
  
        cy.get('[style="margin: 20px;"] > .MuiFormControl-root > .MuiInputBase-root > #custom-css-outlined-input')
        .type('YudiaMyLove')
        .should('have.value', 'YudiaMyLove')
    })
  })