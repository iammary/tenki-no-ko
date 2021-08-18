import { mount } from '@cypress/react'
import SearchPlaces from '@components/SearchPlaces'
import theme from '@theme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import React from 'react'

// Gotchas: Google AutoComplete tested using integration test
// Google Places Autocomplete requires a script to be inserted inside <Head/>
describe('SearchPlaces', () => {
  it('Display search field', () => {
    mount(
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <SearchPlaces onChange={() => {}} />
        </MuiThemeProvider>
      </ThemeProvider>
    )
    cy.get('#places-search-label').contains('Search city')
  })
})
