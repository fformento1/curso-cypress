/// <reference types="cypress" />

describe('Esperas', () => {

    beforeEach('', () => {
        cy.visit('');
        cy.get('[id = "registertoggle"]').dblclick();
        cy.get('#user').type('pushingit');
        cy.get('input#pass').type('123456!');
        cy.contains('Log in').click();
        cy.contains('Waits').click();
        cy.get('[id = "wait"]').dblclick()
    })

    it('Espera con wait', () => {
        cy.get('#message').should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
    })

    it.only('Espera con Timeout', () => {
        cy.get('#message', {timeout : 60000}).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')  // el timeout solo se puede usar con should, NO con expect o assert
        
    })
})