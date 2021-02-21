import { And } from "cypress-cucumber-preprocessor/steps";


And(`I invite user 2`, () => {
    cy.get('form > input')
        .type('ObmPlayer2')
    cy.get('[type="submit"]')
        .click()
    cy.get('option')
        .click()
    cy.get('select').select('15200003428840')
        .should("have.value", '15200003428840')
    cy.contains('Select this user')
        .click()
    cy.get('textarea')
        .type('Play with me!')
    cy.get('[type="submit"]')
        .click()

})
