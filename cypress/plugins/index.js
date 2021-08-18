/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const injectNextDevServer = require('@cypress/react/plugins/next')
const codeCoverageTask = require('@cypress/code-coverage/task')
require('dotenv').config()

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // we can grab some process environment variables
  // and stick it into config.env before returning the updated config
  config.env = config.env || {}
  config.env.WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  if (config.testingType === 'component') {
    injectNextDevServer(on, config)
  }
  codeCoverageTask(on, config)
  return config
}
