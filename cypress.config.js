const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    experimentalCspAllowList: true,
    testIsolation: false,
    experimentalStudio: true,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 50000,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
