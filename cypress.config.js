const { defineConfig } = require("cypress");
const  allureWriter  =  require ( '@shelex/cypress-allure-plugin/writer' ) ; 

module.exports = defineConfig({
  retries: 1,  //para que ejecute otra vez en caso de fallo
  e2e: {
    setupNodeEvents(on, config) {
        allureWriter ( on ,  config ) ; 
        return  config ; 
    },
  },
});
