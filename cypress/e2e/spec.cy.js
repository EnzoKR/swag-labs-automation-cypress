describe('Login test', () => {

    before(() => {
        cy.visit('/') // visit base URl configured in "cypress.config.js"
    })

    it('Valid Login', () => {
        cy.Login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')

    })

    it('invalid Login', () => {
        cy.Login('standard_user_test', 'secret_sauce')
        cy.url().should('include', '/inventory.html')

    })

})