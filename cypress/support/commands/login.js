Cypress.Commands.add('Login', (email, password) => {
    cy.get('[data-test="username"]')
        .should('be.visible')
        .type(email)
    cy.get('[data-test="password"]')
        .should('be.visible')
        .type(password, { log: false })

    cy.get('[data-test="login-button"]')
        .should('be.visible')
        .click()
})
