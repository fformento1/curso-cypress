/// <reference types="cypress" />

describe("Actividad complementaria 3", () =>{
	// instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
    it('Actividad complementaria 3', () =>{
        cy.visit('');
        //cy.contains('Iniciá sesión').dblclick()
        cy.xpath("//span[@id='registertoggle']").dblclick();
        //cy.get('#user').type(`pushingit`);
        cy.xpath('//label[@for="user"][1]//following-sibling::input').type('pushingit');
        //cy.get('#pass').type('123456!');
        cy.xpath('//label[@for="pass"][1]//following-sibling::input').type('123456!');
        // cy.get('#submitForm').click()
        cy.xpath("//button[starts-with(@type, 'subm')]").click();
        // cy.get('#todolistlink').click()
        cy.xpath("//a[text()= 'To Do List']").click()
        // cy.get("[id^='sen']").type("tarea 1")
        cy.xpath("//button[starts-with(@id, 'send')]").type("tarea 1")
        // cy.get('#sendTask').click()
        cy.xpath("//button[starts-with(@id, 'send')]").click()
        // cy.contains('tarea 1').click()
        cy.xpath("//li/div/p").click()
    });
});