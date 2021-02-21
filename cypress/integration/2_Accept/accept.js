import { Then } from "cypress-cucumber-preprocessor/steps";


Then(`I accept thee game`, () => {
    cy.contains('new messages')
        .click();
    cy.get('[type="checkbox"]')
        .first().check()
    cy.get(':nth-child(2) > :nth-child(4) > font > a')
        .click()
    cy.get('[type="submit"]')
        .click()
    cy.get('body').should("contain", 'The invitation was successfully accepted. The game(s) should already be on your status page, and you are the first to move.')

})