const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    experimentalStudio: true,
    experimentalCspAllowList: true,
    testIsolation: false,
    experimentalStudio: true,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 50000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: "https://www.youngliving.com/us/en",
  },
});
