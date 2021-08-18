import { mount } from '@cypress/react'
import theme from '@theme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import React from 'react'
import WeatherForecast from '@components/WeatherForecast'
import result from 'cypress/fixtures/search-results.json'

describe('WeatherForecast', () => {
  context('WeatherCards', () => {
    before(() => {
      mount(
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <WeatherForecast
              isFetching={false}
              hasError={false}
              forecast={result?.forecast.forecastday}
              tz={result?.location.tz_id}
            />
          </MuiThemeProvider>
        </ThemeProvider>
      )
    })
    it('Display weather cards', () => {
      cy.get('#weather-forecast > div').should('have.length', result.forecast.forecastday.length).should('be.visible')
    })
  })

  context('WeatherCard > with data', () => {
    beforeEach(() => {
      mount(
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <WeatherForecast
              isFetching={false}
              hasError={false}
              forecast={result?.forecast.forecastday}
              tz={result?.location.tz_id}
            />
          </MuiThemeProvider>
        </ThemeProvider>
      )
    })
    it('Display icon on weather card', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-icon"]').should('have.length', 3).should('be.visible')
    })
    it('Display date', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-date"]').should('have.length', 3).should('be.visible')
    })
    it('Display weather condition', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-condition"]').should('have.length', 3).should('be.visible')
    })
    it('Display temperature', () => {
      cy.get('#weather-forecast [data-qa="qa_temp-display"]').should('have.length', 3).should('be.visible')
    })
    it('Do not display loading cards', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-loading"]').should('not.exist')
    })
    it('Do not display error', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-error"]').should('not.exist')
    })
  })

  context('WeatherCard > without data', () => {
    beforeEach(() => {
      mount(
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <WeatherForecast isFetching={true} hasError={false} forecast={undefined} tz={undefined} />
          </MuiThemeProvider>
        </ThemeProvider>
      )
    })
    it('Display loading cards', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-loading"]').should('have.length', 3).should('be.visible')
    })
    it('Do not display error', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-error"]').should('not.exist')
    })
    it('Do not display icon on weather card', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-icon"]').should('not.exist')
    })
    it('Do not display date', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-date"]').should('not.exist')
    })
    it('Do not display weather condition', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-condition"]').should('not.exist')
    })
    it('Do not display temperature', () => {
      cy.get('#weather-forecast [data-qa="qa_temp-display"]').should('not.exist')
    })
  })

  context('WeatherCard > with error', () => {
    before(() => {
      mount(
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <WeatherForecast isFetching={false} hasError={true} forecast={[]} tz={''} />
          </MuiThemeProvider>
        </ThemeProvider>
      )
    })
    it('Display error', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-error"]').should('exist')
    })
    it('Do not display loading cards', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-loading"]').should('not.exist')
    })
    it('Do not display icon on weather card', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-icon"]').should('not.exist')
    })
    it('Do not display date', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-date"]').should('not.exist')
    })
    it('Do not display weather condition', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-condition"]').should('not.exist')
    })
    it('Do not display temperature', () => {
      cy.get('#weather-forecast [data-qa="qa_temp-display"]').should('not.exist')
    })
  })

  context('WeatherCard > no data > not fetching', () => {
    before(() => {
      mount(
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <WeatherForecast isFetching={false} hasError={true} forecast={undefined} tz={undefined} />
          </MuiThemeProvider>
        </ThemeProvider>
      )
    })
    it('Do not display error', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-error"]').should('not.exist')
    })
    it('Do not display loading cards', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-loading"]').should('not.exist')
    })
    it('Do not display icon on weather card', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-icon"]').should('not.exist')
    })
    it('Do not display date', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-date"]').should('not.exist')
    })
    it('Do not display weather condition', () => {
      cy.get('#weather-forecast [data-qa="qa_weather-condition"]').should('not.exist')
    })
    it('Do not display temperature', () => {
      cy.get('#weather-forecast [data-qa="qa_temp-display"]').should('not.exist')
    })
  })
})
