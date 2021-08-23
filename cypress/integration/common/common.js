import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const baseUrl = "https://example.cypress.io"
Given('I\'m on the {string} page', (url) => {
  cy.visit(baseUrl + url);
})

When('I click on {string}', (label) => {
    cy.get('.home-list').contains(label).click();
})

Then('I should have {string} in the URL', (url) => {
    cy.url().should('include', url);
})
