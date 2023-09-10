/// <reference types="cypress" />

describe('Aserciones', () => {
    
    beforeEach('', () => {
        cy.visit('');
        cy.contains('Iniciá sesión').dblclick()
        cy.get('#user').type(`pushingit`);
        cy.get('#pass').type('123456!');
        cy.contains('Log in').click()
        cy.contains('Waits').click()
    })

    it('Validar el título utilizando should', () => {
        cy.get('#title').should('have.text', "Waits")
    })

    it('Validar el título utilizando expect', () => {
        cy.get('#title').invoke('text').then(text => {
            expect(text).to.be.equal('Waits')
        })
    })

    it('Validar el título utilizando assert', () => {
        cy.get('#title').invoke('text').then(text => {
            assert.equal(text, 'Waits')
        })
    })

    it('Validar título con length', () => {
        cy.get('#title').should('have.length', 1); //// aca va un 1 porque es un solo título
        cy.get('#title').invoke('text').should('have.length', 5)  /// aca va un 5 porque son los caracteres que tiene el titulo
        cy.get('#title').invoke('text').then(text => {
            expect(text).to.have.lengthOf(5)
            assert.lengthOf(text, 5)
        })
    })
    
})