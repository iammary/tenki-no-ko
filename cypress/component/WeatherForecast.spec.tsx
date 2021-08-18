import { mount } from '@cypress/react'
import theme from '@theme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import React from 'react'
import WeatherForecast from '@components/WeatherForecast'
import result from 'cypress/fixtures/search-results.json'

describe('WeatherForecast', () => {
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
  context('WeatherCards', () => {
    it('Display weather cards', () => {
      cy.get('#weather-forecast > div').should('have.length', result.forecast.forecastday.length).should('be.visible')
    })
  })
  context('WeatherCard', () => {
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
  })
})
