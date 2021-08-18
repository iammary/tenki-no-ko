/// <reference types="cypress" />

// @ts-ignore
describe('The Document Metadata', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('looks inside the head content using `cy.document()`', () => {
    cy.document()
  })

  it('looks inside <title> tag', () => {
    cy.get('head title').should('contain', 'Weather forecast')
  })

  it('looks inside <meta> tag for description', () => {
    cy.get('head meta[name="description"]').should('have.attr', 'content', 'A 3-day weather forecasting app')
  })
})
