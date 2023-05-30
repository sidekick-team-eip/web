describe('E2E Test', () => {
    it('Should fill out form and click button', () => {
      // Visit the page
      cy.visit('http://localhost:3000');

      cy.contains('Log in').click()

      cy.url().should('include', '/login')
      cy.get('.mt-16 > .MuiFormControl-root > .MuiInputBase-root > #custom-css-outlined-input')
      .type('Bud_Crist@Reichel.us')
      .should('have.value', 'Bud_Crist@Reichel.us')

      cy.get('[style="margin: 20px;"] > .MuiFormControl-root > .MuiInputBase-root > #custom-css-outlined-input')
      .type('@Bonjour1')
      .should('have.value', '@Bonjour1')

      cy.get(':nth-child(3) > .button').click()

      cy.wait(3000)
  
      cy.contains('Profile').click()
      // Check the value of a placeholder
      cy.get(':nth-child(2) > .text-sm')
        .should('have.attr', 'placeholder', 'Boyd_Herzog');
      
      // Fill the input field
      cy.get(':nth-child(2) > .text-sm')
        .type('Your input value')
        .should('have.value', 'Your input value');
  
      // Click the button
      cy.get('#your-button-id')
        .click();
  
      // Add more assertions or test additional behavior if needed
    });
  });