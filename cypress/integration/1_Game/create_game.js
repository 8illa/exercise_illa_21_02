import { Then } from "cypress-cucumber-preprocessor/steps";


Then(`I create a new game of type “Stack4”`, () => {
    cy.contains('New game')
        .click()
    cy.contains('Invite a specific user to play a game')
        .click();
    cy.get('[value="9"]')
        .click()
    cy.contains('Choose game')
        .click();
})