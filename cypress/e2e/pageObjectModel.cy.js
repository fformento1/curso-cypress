/// <reference types="cypress" />

import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { ToDoListPage } from "../support/pages/toDoListPage";

describe('Page Object Model', () => {
    let datos
    const loginPage = new LoginPage();
    const homePage = new HomePage()
    const toDoListPage = new ToDoListPage()

    before('Before', () => {
        cy.fixture('datos').then(data => {
            datos = data
        })
    })

    beforeEach('beforeEach', () => {
        cy.visit('')
        cy.contains('Iniciá sesión').dblclick()
        loginPage.escribirUsuario(Cypress.env('username'))
        //cy.get('#user').type(`pushingit`);
        loginPage.escribirContraseña(Cypress.env('password'))
        //cy.get('#pass').type('123456!');
        loginPage.clickLoginButton()
        //cy.get('#submitForm').click()
        homePage.clickToDoListButton()
        //cy.get('#todolistlink').click()
    })

    it('Agregar dos tareas', () => {
        //cy.get("input[name=task]").type(datos.tarea1);
        toDoListPage.escribirTarea(datos.tarea1)
        toDoListPage.clickSendtask()
        //cy.get("#sendTask").click();
        toDoListPage.escribirTarea(datos.tarea2)
        //cy.get("input[name=task]").type(datos.tarea2);
        toDoListPage.clickSendtask()
        //cy.get("#sendTask").click();
        cy.contains(datos.tarea1).click();
        //cy.contains(datos.tarea2).click()
        //cy.xpath(`//p[text()="${datos.tarea1}"]//following-sibling::button[text()="Delete"]`).click()
        toDoListPage.obtenerTarea(datos.tarea1).should('exist') //para incluir aserciones, el should va en el test
        toDoListPage.clickDeleteButton(datos.tarea1)
        toDoListPage.obtenerTarea(datos.tarea1).should('not.exist')  //para incluir aserciones
    })
})