/// <reference types="cypress" />

//crea un fixture con las siguientes keys 
//username (el username debe ser inexistente)
//pasword (la password debe ser valida) //123456!
//mensajeError (el mensaje de error lo tienes que copiar de la pagina ) //Credentials were not found

//usa before para acceder al fixture y obtener los datos
//beforeEach para visitar la pagina y dirigirse al login

describe('Actividad complementaria 4', () => {
    //inicializa el fixture
    let datosAct4

    before('Before', () => {
        cy.fixture('act4').then(data => {
            datosAct4 = data 
        })
    })

    beforeEach('BeforeEach', () => {
        cy.visit('');
        cy.contains('Iniciá sesión').dblclick()
    })

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(datosAct4.userName);
        cy.get('#pass').type(datosAct4.password); //la contraseña debe ser valida por el sistema
        cy.get('#submitForm').click();
        cy.get('#messageError').should('have.text', datosAct4.mensajeError/*agrega el mensaje que esta en el fixture */)
    });
});