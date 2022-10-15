const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://www.webdriveruniversity.com',
    env: {
      first_name: 'Sarah',
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx,feature,features}',
    projectId: '5nwwf9',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 12000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
  },
});
