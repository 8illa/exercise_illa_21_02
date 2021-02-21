import { And } from "cypress-cucumber-preprocessor/steps";


And(`I log in as a user 1`, () => {
    cy.get(':nth-child(2) > [align="left"] > input')
        .type('ObmPlayer1')
    cy.get(':nth-child(3) > [align="left"] > input')
        .type('BlendTest123!')
    cy.contains('Log in')
        .click();
})