import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.itsyourturn.com'
Given('I open testing page', () => {
    cy.visit(url)
})