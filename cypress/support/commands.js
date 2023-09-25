// ***********************************************

// Just to show a custom command addition
Cypress.Commands.add("goToUrlUsingCustomCommand", () => {
    cy.visit("/");
});