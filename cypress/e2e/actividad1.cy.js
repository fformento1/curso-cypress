/// <reference types="cypress" />
describe("Actividad complementaria", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Actividad complementeria 1", () => {
    cy.visit("https://pushing-front.vercel.app/");
    //crear un test que permita registrarse en la pagina!
    //Recorda usar npx cypress open para abrir la interfaz de usuario
    //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female // recuerden el force true
    cy.get("#user").type("FernandaFormento");
    cy.get("#pass").type("123456!");
    cy.get("[value='Female']").check({ force: true });
    cy.get("#day").select("5");
    cy.get("#month").select("May");
    cy.get("#year").select("1993");
    cy.get("#submitForm").click();
  });
});
