/// <reference types="cypress"/>

describe("Selectores", () => {
  it("Enncontrar elementos utilizando cssSelectors", () => {
    cy.visit("");
    cy.get("button");
    cy.get('[type="submit"]'); //para buscar un elemento html especifico, porque si hay mas de un atributo igual cypress no lo puede procesar
    cy.get("#user"); // para los ID se puede usar el # seguido por su valor. Ej= '#user' (# es porque es un ID y 'user'es el valor del ID)
    cy.get('[id="user"]'); // Tambien se puede buscar asi el ID, como haciamos con el submit
    cy.get(".password"); // las tres de password son distintas maneras de preguntar lo mismo
    cy.get("input.password");
    cy.get('input[id="pass"]');
    cy.get('[type^="su"]'); // ^ para que el valor comience con el caracter que indicamos. En ee3lv ejeplo usamos submit
    cy.get('[type*="bmi"]'); // * para que el valor contenga el caracter que indicamos
    cy.get('[type$="mit"]'); // $ para que el valor comience con el caracter que indicamos
  });

  it("Encontrar elementos web utilizando contains", () => {
    cy.visit("");
    cy.contains('[type="submit"]', "Register", { mathCase: false }); // lleva dos parametros, el primero es elemento especifico, y el segundo es el valor total o parcial del elemento. El primer valor es opcional. El mathCase es para que no distinga entre mayúsculas y minúsculas
    cy.contains("#registertoggle", "Iniciá sesión", { mathCase: false });
  });

  it("Encontrar elementos web utilizando find", () => {
    cy.visit("");
    cy.get("form").find("input#user");
  });

  it("Encontrar elementos web utilizando siblings", () => {
    cy.visit("");
    cy.contains("span", "Male").siblings("input").check({ force: true });
  });

  it("Encontrar elementos web utilizando parent", () => {
    cy.visit("");
    cy.get('[name = "user"]').parent("div");
  });

  it("Encontrar elementos web utilizando children", () => {
    cy.visit("");
    cy.get('div[role = "group"]').children('[name = "user"]');
  });
});
