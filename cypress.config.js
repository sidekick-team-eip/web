const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "projectId": "2s5j6d",
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
