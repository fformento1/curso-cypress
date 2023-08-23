/// <reference types="cypress" />

describe('Hooks', () =>{
    let datos

    before('Before', () => {
        datos = {
            "tarea1" : "Hacer las compras",
            "tarea2" : "Ordenar",
            "tarea3" : "Cocinar"
        }
    })

    beforeEach('beforeEach', () => {
        cy.visit('')
        cy.contains('Iniciá sesión').dblclick()
        cy.get('#user').type(`pushingit`);
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click()
        cy.get('#todolistlink').click()
    })

    it('Deberia poder completar una tarea', () =>{
        cy.get("[id^='sen']").type(datos.tarea1)
        cy.get('#sendTask').click()
        cy.contains(datos.tarea1).click()
    });

    it('Deberia poder completar una segunda tarea', () =>{
        cy.get("[id^='sen']").type(datos.tarea2)
        cy.get('#sendTask').click()
        cy.contains(datos.tarea2).click()
    });
})