/// <reference types="cypress" />
import search from '../../fixtures/search.json'

describe('homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context('Search autocomplete', () => {
    it('display the search city autocomplete', () => {
      cy.get('#places-search-label').contains('Search city')
      cy.get('#places-search').invoke('attr', 'placeholder').should('contain', 'Enter a city to view 3-day forecast')
      cy.get('#weather-forecast').should('not.exist')
    })

    it(`display the suggested cities for "${search.city}"`, () => {
      cy.get('#places-search').type(`${search.city}`)
      cy.get('.MuiAutocomplete-popper').should('be.visible')
      cy.get('.MuiAutocomplete-popper ul > li').should('have.length.greaterThan', 0)
      cy.get('.MuiAutocomplete-popper ul > li').contains(search.cityFullName)
    })
  })

  context('Search results', () => {
    it('do not display weather forecast on first load', () => {
      cy.get('#weather-forecast').should('not.exist')
    })

    it('display 3-day weather forecast for "${search.city}"', () => {
      cy.get('#places-search').type(`${search.city}`)
      cy.get('.MuiAutocomplete-popper')
        .wait(1000)
        .then(() => {
          cy.get('#places-search').click().type(`{downarrow}{downarrow}{downarrow}{enter}`)
          cy.get('#weather-forecast [data-qa="qa_temp-display"]').should('have.length', 3)
        })
    })
  })
})
