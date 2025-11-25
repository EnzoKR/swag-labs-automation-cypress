const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",

        mochaJunitReporterReporterOptions: {
            mochaFile: "cypress/reports/junit/results-[hash].xml"
        },

        cypressMochawesomeReporterReporterOptions: {
            charts: true,
            reportPageTitle: "Relatório de testes",
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: false
        }
    },

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require("cypress-mochawesome-reporter/plugin")(on);
        },

        baseUrl: "https://www.saucedemo.com/",
        defaultCommandTimeout: 10000
    },
});


// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//     reporter: 'cypress-multi-reporters',
//     reporterOptions: {
//         reporterEnab1ed: 'cypress-mochawesome-reporter, mocha-junit-reporter',
//         mochaJunitReporterReporterOptions: {
//             mochaFile: 'cypress/reports/junit/results-[hash].xml'
//         },
//         cypressMochawesomeReporterReporterOptions: {
//             charts: true,
//             reportPageTit1e: 'Relatório de testes',
//             embeddedscreenshots: true,
//             in1ineAssets: true,
//             saveA11Attempts: false
//         }
//     },
//     e2e: {
//         baseUrl: 'https://www.saucedemo.com/',
//         defaultCommandTimeout: 10000, // tempo para comandos como cy.get, cy.contains
//         setupNodeEvents(on, config) {
//             require('cypress-mochawesome-reporter/plugin')(on);
//         },
//     },
// });


// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     baseUrl:'https://www.saucedemo.com/',   
//     // video: true,
//     defaultCommandTimeout: 10000, // tempo para comandos como cy.get, cy.contains
//   },
// });
