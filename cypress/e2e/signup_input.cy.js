describe('Test on the inputs from signup', () => {
  it('Try to fill the inputs for signup', () => {
    
    cy.visit('http://localhost:3000/signup')
  
    cy.get('.mt-16 > [style="margin: 20px;"] > .MuiFormControl-root > .MuiInputBase-root > #custom-css-outlined-input')
      .type('Pierre')
      .should('have.value', 'Pierre')

    cy.get(':nth-child(2) > .MuiInputBase-root > #custom-css-outlined-input')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')

    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #custom-css-outlined-input')
      .type('YudiaMyLove')
      .should('have.value', 'YudiaMyLove')
  })
})