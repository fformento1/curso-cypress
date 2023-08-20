/// <reference types="cypress" />

describe("Desafío1", () => {
  const numeroRandom = Math.floor(Math.random() * 1000);
  let nombre = `Fernanda${numeroRandom}`;

  it("Completar una tarea en To Do List", () => {
    cy.visit("");
    cy.get("#user").type(nombre);
    cy.get("#pass").type("123456!");
    cy.get("[value='Female']").check({ force: true });
    cy.get("#day").select("5");
    cy.get("#month").select("May");
    cy.get("#year").select("1993");
    cy.get("#submitForm").click();
    cy.get("#todolistlink").click();
    cy.get("#task").type("Hacer el desafío 1");
    cy.get("#sendTask").click();
    cy.contains("p", "Hacer el desafío 1").click();
  });
});
