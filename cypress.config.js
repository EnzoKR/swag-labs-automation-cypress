const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://www.saucedemo.com/',   
    // video: true,
    defaultCommandTimeout: 10000, // tempo para comandos como cy.get, cy.contains
  },
});


