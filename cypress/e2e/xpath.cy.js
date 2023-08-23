/// <reference types="cypress" />

describe('Xpath', () => {

    it('Debería encontrar elementos utilizando Xpath absoluto', () => {
        cy.visit('');
        cy.xpath('/html/body/div/div/div/img')
    })

    it('Debería encontrar elementos utilizando Xpath relativo', () => {
        cy.visit('');
        cy.xpath("//img[@alt='pushingIT']");
        cy.get("[alt='pushingIT']")  // cssSelectors
    })

    it('Debería encontrar elementos utilizando Xpath contains', () => {
        cy.visit('');
        cy.xpath("//img[contains(@alt, 'pushing')]")
    })

    it('Debería encontrar elementos utilizando Xpath starts-with', () => {
        cy.visit('');
        cy.xpath("//img[starts-with(@alt, 'push')]")
    })

    it('Debería encontrar elementos utilizando Xpath text()', () => {
        cy.visit('');
        cy.xpath("//button[text()='Register']")
    })

    it('Debería encontrar elementos utilizando Xpath contains + text()', () => {
        cy.visit('');
        cy.xpath("//button[contains(text(), 'Regis')]")
    })

    it('Encontrar elementos utilizando el método child', () => {
        cy.visit('');
        cy.xpath('//div[@role="group"][1]//child::input')
    })

    it('Encontrar elementos utilizando el método parent', () => {
        cy.visit('');
        cy.xpath('//input[@id="user"]//parent::div')
    })

    it('Encontrar elementos utilizando el método preceding-sibling', () => {
        cy.visit('');
        cy.xpath('//input[@id="user"]//preceding-sibling::label')
    })

    it('Encontrar elementos utilizando el método following-sibling', () => {
        cy.visit('');
        cy.xpath('//label[@for="user"][1]//following-sibling::input')
    })
})