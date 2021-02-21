import { And } from "cypress-cucumber-preprocessor/steps";


And(`I log in as a user 2`, () => {
    cy.get(':nth-child(2) > [align="left"] > input')
        .type('ObmPlayer2')
    cy.get(':nth-child(3) > [align="left"] > input')
        .type('BlendTest123!')
    cy.contains('Log in')
        .click();
})