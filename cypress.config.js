const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280, // Define a largura da janela do navegador durante o teste
    viewportHeight: 720, // Define a altura da janela do navegador durante o teste
    watchForFileChanges: false, // Desativa o monitoramento de alterações nos arquivos de teste
    specPattern: "cypress/e2e/**/*.feature", // Localização dos arquivos de teste com extensão .feature
    baseUrl: "http://www.automationpractice.pl/",

    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber()); // Configura o pré-processador para os arquivos .feature
    },
  },
});
