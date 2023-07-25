/// <reference types="cypress"/>

describe('Mocha', () => {
    const data = {
        curso: "Pushing it",
        profesor: "Fabrizio Otranto"
    }
    it("Primer test con cypress usando Mocha", () => {
        cy.log(data)

    })
    it("Segundo test con cypress usando Mocha", () => {
        cy.log("Segundo test con cypress")
    })
})
    it("Tercer test con cypress usando Mocha", () => {
    cy.log('Tercer test con cypress')
})
